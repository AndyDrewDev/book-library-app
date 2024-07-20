import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addBook } from '../../redux/slices/booksSlice'
import createBookWithId from '../../utils/createBookWithId'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    dispatch(addBook(createBookWithId(randomBook)))
  }

  const handleRandomBookFromApi = async () => {
    try {
      const res = await axios.get('http://localhost:4000/random-book')
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithId(res.data)))
      }
    } catch (error) {
      console.log('Error fetching random book', error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author })))

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
          Recommendation
        </button>
        <button type='button' onClick={handleRandomBookFromApi}>
          Random from API
        </button>
      </form>
    </div>
  )
}

export default BookForm
