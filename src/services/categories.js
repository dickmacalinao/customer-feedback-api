import { postgresDb } from '../config/postgres.js'

export async function getCategories(params) {
  
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
    "WHERE customer.slug = $1 ";

  var queryParams = [params.customerSlug];

  if (params?.customerActive !== undefined) {
    sQuery = sQuery + "AND customer.active = $2 ";
    queryParams = [...queryParams, params.customerActive];
  }  

  if (params?.categoryId !== undefined) {
    sQuery = sQuery + "AND category.id = $3 ";
    queryParams = [...queryParams, params.categoryId];
  }  

  // console.log(sQuery, queryParams);

  const result = await postgresDb.query(sQuery , queryParams)
  return result.rows
}