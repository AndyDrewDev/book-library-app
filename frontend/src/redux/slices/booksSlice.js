import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithId'

const initialState = {
  books: [],
  errorMsg: '',
}

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await axios.get('http://localhost:5000/random-book')
  return res.data
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
    setError: (state, action) => {
      state.errorMsg = action.payload
    },
    clearError: (state) => {
      state.errorMsg = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithId(action.payload, 'API'))
      }
    })

    builder.addCase(fetchBook.rejected, (state, action) => {
      state.errorMsg = action.error.message
    })
  },
})

export const { addBook, deleteBook, toggleFavorite, setError, clearError } =
  booksSlice.actions

export const selectBooks = (state) => state.books.books

export const selectErrorMsg = (state) => state.books.errorMsg

export default booksSlice.reducer
