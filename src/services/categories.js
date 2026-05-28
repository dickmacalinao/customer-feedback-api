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
    'SELECT * FROM category'
  )
  return result.rows
}