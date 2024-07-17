import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from '../../redux/books/actionCreators'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    const randomBookWithId = { ...randomBook, id: uuidv4(), isFavorite: false }

    dispatch(addBook(randomBookWithId))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title && author) {
      const book = { title, author, id: uuidv4(), isFavorite: false }

      dispatch(addBook(book))

      setTitle('')
      setAuthor('')
    }
  }
  return (
    <div className='app-block book-form'>
      <h2>Add a New Book </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>
            Title:
            <input
              type='text'
              id='title'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='author'>
            Author:
            <input
              type='text'
              id='author'
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </label>
        </div>
        <button type='submit'>Add Book</button>
        <button type='button' onClick={handleAddRandomBook}>
          Recomendation
        </button>
      </form>
    </div>
  )
}

export default BookForm
