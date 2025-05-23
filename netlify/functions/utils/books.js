// Import the books data directly to avoid file system issues in Netlify Functions
const booksData = [
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    year: 1958,
  },
  {
    title: 'Fairy tales',
    author: 'Hans Christian Andersen',
    year: 1836,
  },
  {
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    year: 1315,
  },
  {
    title: 'The Epic Of Gilgamesh',
    author: 'Unknown',
    year: -1700,
  },
  {
    title: 'The Book Of Job',
    author: 'Unknown',
    year: -600,
  },
  {
    title: 'One Thousand and One Nights',
    author: 'Unknown',
    year: 1200,
  },
  {
    title: "Njál's Saga",
    author: 'Unknown',
    year: 1350,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
  },
  {
    title: 'Le Père Goriot',
    author: 'Honoré de Balzac',
    year: 1835,
  },
  {
    title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
    author: 'Samuel Beckett',
    year: 1952,
  },
  {
    title: 'The Decameron',
    author: 'Giovanni Boccaccio',
    year: 1351,
  },
  {
    title: 'Ficciones',
    author: 'Jorge Luis Borges',
    year: 1965,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
    year: 1942,
  },
  {
    title: 'Don Quijote De La Mancha',
    author: 'Miguel de Cervantes',
    year: 1610,
  },
]

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length)
  return booksData[randomIndex]
}

module.exports = {
  getRandomBook,
  booksData,
}
