const path = require('path')
const fs = require('fs')

const booksDataPath = path.resolve(__dirname, '../data/books.json')
const booksData = JSON.parse(fs.readFileSync(booksDataPath, 'utf8'))

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length)
  return booksData[randomIndex]
}

module.exports = {
  getRandomBook,
  booksData,
}
