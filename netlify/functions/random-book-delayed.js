const { getRandomBook } = require('./utils/books')

// Helper function to create a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

exports.handler = async function (event, context) {
  // Wait for 2 seconds
  await delay(2000)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify(getRandomBook()),
  }
}
