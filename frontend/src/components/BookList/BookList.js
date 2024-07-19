import './BookList.css'
import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  deleteBook,
  toggleFavorite,
  selectBooks,
} from '../../redux/slices/booksSlice'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectIsFavoriteFilter,
} from '../../redux/slices/filterSlice'

const filterBooks = (books, titleFilter, authorFilter, isFavoriteFilter) => {
  const booksFilter = books.filter((book) => {
    const matchedTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    const matchedAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matchesFavorite = isFavoriteFilter ? book.isFavorite : true

    return matchedTitle && matchedAuthor && matchesFavorite
  })

  return booksFilter
}

const BookList = () => {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const isFavoriteFilter = useSelector(selectIsFavoriteFilter)

  const filteredBooks = filterBooks(
    books,
    titleFilter,
    authorFilter,
    isFavoriteFilter
  )

  const dispatch = useDispatch()

  const highlightMatchedText = (text, filter) => {
    if (!filter) {
      return text
    }
    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className='highlight'>
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className='app-block book-list'>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => {
            const handleDeleteBook = (id) => dispatch(deleteBook(book.id))

            const handleToggleFavorite = (id) =>
              dispatch(toggleFavorite(book.id))

            return (
              <li key={book.id}>
                <div className='book-info'>
                  {++i}. {highlightMatchedText(book.title, titleFilter)} by{' '}
                  <strong>
                    {highlightMatchedText(book.author, authorFilter)}
                  </strong>
                </div>

                <div className='book-actions'>
                  <span onClick={handleToggleFavorite}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className='star-icon' />
                    ) : (
                      <BsBookmarkStar className='star-icon' />
                    )}
                  </span>
                  <button onClick={handleDeleteBook}>Delete</button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default BookList
