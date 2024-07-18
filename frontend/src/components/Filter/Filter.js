import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  setAuthorFilter,
  selectTitleFilter,
  selectAuthorFilter,
  resetFilters,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)

  const handleTitleFilterChange = (event) => {
    dispatch(setTitleFilter(event.target.value))
  }

  const handleAuthorFilterChange = (event) => {
    dispatch(setAuthorFilter(event.target.value))
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
          <div className="filter-group">
            <input
              type='text'
              placeholder='Filter by author...'
              value={authorFilter}
              onChange={handleAuthorFilterChange}
            />
          </div>
        <button type='button' onClick={handleResetFilters}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Filter
