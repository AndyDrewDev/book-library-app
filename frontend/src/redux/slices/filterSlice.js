import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  isFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setIsFavoriteFilter: (state) => {
      state.isFavorite = !state.isFavorite
    },
    resetFilters: () => {
      return initialState
    },
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setIsFavoriteFilter,
  resetFilters,
} = filterSlice.actions

// Базовий селектор
const selectFilterState = (state) => state.filter

// Мемоізовані селектори
export const selectTitleFilter = createSelector(
  [selectFilterState],
  (filterState) => filterState.title
)

export const selectAuthorFilter = createSelector(
  [selectFilterState],
  (filterState) => filterState.author
)

export const selectIsFavoriteFilter = createSelector(
  [selectFilterState],
  (filterState) => filterState.isFavorite
)

export default filterSlice.reducer
