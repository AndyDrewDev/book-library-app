import { useDispatch, useSelector } from 'react-redux'
import { useCallback, memo } from 'react'
import {
  setTitleFilter,
  setAuthorFilter,
  setIsFavoriteFilter,
  selectTitleFilter,
  selectAuthorFilter,
  selectIsFavoriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const isFavoriteFilter = useSelector(selectIsFavoriteFilter)

  const handleTitleFilterChange = useCallback(
    (event) => {
      dispatch(setTitleFilter(event.target.value))
    },
    [dispatch]
  )

  const handleAuthorFilterChange = useCallback(
    (event) => {
      dispatch(setAuthorFilter(event.target.value))
    },
    [dispatch]
  )

  const handleIsFavoriteFilterChange = useCallback(() => {
    dispatch(setIsFavoriteFilter())
  }, [dispatch])

  const handleResetFilters = useCallback(() => {
    dispatch(resetFilters())
  }, [dispatch])

  return (
    <div className='app-block filter'>
      <div className='filter-row'>
        <div className='filter-group'>
          <input
            type='text'
            placeholder='Filter by title...'
            value={titleFilter}
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className='filter-group'>
          <input
            type='text'
            placeholder='Filter by author...'
            value={authorFilter}
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className='filter-group'>
          <label>
            <input
              type='checkbox'
              checked={isFavoriteFilter}
              onChange={handleIsFavoriteFilterChange}
            />
            Show favorite
          </label>
        </div>
        <button type='button' onClick={handleResetFilters}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default memo(Filter)
