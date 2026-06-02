import { postgresDb } from '../config/postgres.js'

export async function getCategories(params) {

  var bindIndex = 1;
  
  var sQuery = 
    "SELECT category.id, category.order_seq, category.category, " +
      "(" +
        "SELECT JSON_AGG(questions_inner) AS questions FROM " +
        "( " +
          "SELECT question.id, question.type, question.question, question.default_value, " + 
            "string_to_array(question.validations, ',') as validations " +
          "FROM question " +
          "WHERE question.category_id = category.id " +
          "ORDER BY question.id " +
        ") AS questions_inner " +
      ") AS questions " +
    "FROM category " +
    "JOIN customer ON customer.id = category.customer_id " +
    "WHERE customer.slug = $" + (bindIndex++) + " ";

  var queryParams = [params.customerSlug];

  if (params?.customerActive !== undefined) {
    sQuery = sQuery + "AND customer.active = $" + (bindIndex++) + " ";
    queryParams = [...queryParams, params.customerActive];
  }  

  if (params?.categoryId !== undefined) {
    sQuery = sQuery + "AND category.id = $" + (bindIndex++) + " ";
    queryParams = [...queryParams, params.categoryId];
  }
  
  if (params?.categoryActive !== undefined) {
    sQuery = sQuery + "AND category.active = $" + (bindIndex++) + " ";
    queryParams = [...queryParams, params.categoryActive];
  }

  // console.log(sQuery, queryParams);

  /*
  if (params?.questionActive !== undefined) {
    sQuery = sQuery + "AND question.active = $5 ";
    queryParams = [...queryParams, params.questionActive];
  }
  */

  const result = await postgresDb.query(sQuery , queryParams)
  return result.rows
}