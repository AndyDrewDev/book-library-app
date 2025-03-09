import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithId'

const initialState = {
  books: [],
  isLoadingFromAPI: false,
  errorMsg: '',
}

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, { rejectWithValue }) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }
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
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoadingFromAPI = true
        state.errorMsg = ''
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoadingFromAPI = false
        if (action?.payload?.title && action?.payload?.author) {
          state.books.push(createBookWithId(action.payload, 'API'))
        }
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoadingFromAPI = false
        state.errorMsg = action.payload || 'Failed to fetch book from API'
      })
  },
})

export const { addBook, deleteBook, toggleFavorite, setError, clearError } =
  booksSlice.actions

// Базовий селектор
const selectBooksState = (state) => state.books

// Мемоізовані селектори з використанням createSelector
export const selectBooks = createSelector(
  [selectBooksState],
  (booksState) => booksState.books
)

export const selectErrorMsg = createSelector(
  [selectBooksState],
  (booksState) => booksState.errorMsg
)

export const selectIsLoadingFromAPI = createSelector(
  [selectBooksState],
  (booksState) => booksState.isLoadingFromAPI
)

export default booksSlice.reducer
