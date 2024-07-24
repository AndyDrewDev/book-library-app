import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import {
  addBook,
  fetchBook,
  setError,
  selectIsLoadingFromAPI,
} from '../../redux/slices/booksSlice'
import createBookWithId from '../../utils/createBookWithId'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const isLoadingFromAPI = useSelector(selectIsLoadingFromAPI)
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    dispatch(addBook(createBookWithId(randomBook, 'random')))
  }

  const handleRandomBookFromApi = () => {
    dispatch(fetchBook('http://localhost:4000/random-book-deleyed'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author }, 'manual')))

      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('Please enter a title and author'))
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
        <button
          type='button'
          onClick={handleRandomBookFromApi}
          disabled={isLoadingFromAPI}
        >
          {isLoadingFromAPI ? (
            <>
              <span>Loading...</span>
              <FaSpinner className='spinner' />
            </>
          ) : (
            'Random from API'
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
