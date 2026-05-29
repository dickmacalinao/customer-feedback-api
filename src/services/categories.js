/*
const { DB_URL } = require( "./dbX");

const pgp = require('pg-promise')();
const db = pgp(DB_URL);

const getAllCategories = () => {

  console.log('DB_URL', DB_URL);

  db.one('SELECT $1 AS value', 1)
    .then((data) => {
      return data.value;      
    })
};
*/

import { postgresDb } from '../config/postgres.js'

export async function getCategories() {
  const result = await postgresDb.query(
    "SELECT category.id, category.order_seq, category.category, " +
      "(" +
        "SELECT JSON_AGG(questions_inner) AS questions FROM " +
        "( " +
          "SELECT question.id, question.type, question.question, question.default_value, question.validations " +
          "FROM question " +
          "WHERE question.category_id = category.id " +
          "ORDER BY question.id " +
        ") AS questions_inner " +
      ") AS questions " +
    "FROM category " +
    "JOIN customer ON customer.id = category.customer_id " +
    "WHERE customer.slug = 'cafe-nook\'"
  )
  return result.rows
}