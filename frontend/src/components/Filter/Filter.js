import { useDispatch, useSelector } from 'react-redux'
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

  const handleTitleFilterChange = (event) => {
    dispatch(setTitleFilter(event.target.value))
  }

  const handleAuthorFilterChange = (event) => {
    dispatch(setAuthorFilter(event.target.value))
  }

  const handleIsFavoriteFilterChange = () => {
    dispatch(setIsFavoriteFilter())
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

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

export default Filter
