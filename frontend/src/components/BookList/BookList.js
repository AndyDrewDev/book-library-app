import './BookList.css'
import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import { useCallback, useMemo, memo } from 'react'
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
  return books.filter((book) => {
    const matchedTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    const matchedAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matchesFavorite = isFavoriteFilter ? book.isFavorite : true

    return matchedTitle && matchedAuthor && matchesFavorite
  })
}

const BookItem = memo(({ book, index, titleFilter, authorFilter }) => {
  const dispatch = useDispatch()

  const handleDeleteBook = useCallback(() => {
    dispatch(deleteBook(book.id))
  }, [dispatch, book.id])

  const handleToggleFavorite = useCallback(() => {
    dispatch(toggleFavorite(book.id))
  }, [dispatch, book.id])

  const highlightMatchedText = useCallback((text, filter) => {
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
  }, [])

  return (
    <li>
      <div className='book-info'>
        {index}. {highlightMatchedText(book.title, titleFilter)} by{' '}
        <strong>{highlightMatchedText(book.author, authorFilter)}</strong> (
        {book.source})
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
})

const BookList = () => {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const isFavoriteFilter = useSelector(selectIsFavoriteFilter)

  const filteredBooks = useMemo(
    () => filterBooks(books, titleFilter, authorFilter, isFavoriteFilter),
    [books, titleFilter, authorFilter, isFavoriteFilter]
  )

  return (
    <div className='app-block book-list'>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <BookItem
              key={book.id}
              book={book}
              index={i + 1}
              titleFilter={titleFilter}
              authorFilter={authorFilter}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default memo(BookList)
