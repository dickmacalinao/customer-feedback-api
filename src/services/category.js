import { postgresDb } from '../config/postgres.js'

const BASE_QUERY = `
  SELECT 
    category.id, 
    category.order_seq, 
    category.category,
    (
      SELECT JSON_AGG(questions_inner) AS questions FROM (
        SELECT 
          question.id, 
          question.type, 
          question.question, 
          question.default_value,
          string_to_array(question.validations, ',') AS validations
        FROM question
        WHERE question.category_id = category.id
        ORDER BY question.id
      ) AS questions_inner
    ) AS questions
  FROM category
  JOIN customer ON customer.id = category.customer_id
  WHERE customer.slug = $1
`

export async function getCategories(params) {
  const queryParams = [params.customerSlug]
  const conditions = []
  let bindIndex = 2

  if (params?.customerActive !== undefined) {
    conditions.push(`customer.active = $${bindIndex++}`)
    queryParams.push(params.customerActive)
  }

  if (params?.categoryId !== undefined) {
    conditions.push(`category.id = $${bindIndex++}`)
    queryParams.push(params.categoryId)
  }

  if (params?.categoryActive !== undefined) {
    conditions.push(`category.active = $${bindIndex++}`)
    queryParams.push(params.categoryActive)
  }

  const query = conditions.length > 0 
    ? `${BASE_QUERY} AND ${conditions.join(' AND ')}` 
    : BASE_QUERY

  const result = await postgresDb.query(query, queryParams)
  return result.rows
}