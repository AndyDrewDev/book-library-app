import './BookList.css'
import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
const BookList = () => {
  const books = useSelector((state) => state.books)

  const dispatch = useDispatch()

  return (
    <div className='app-block book-list'>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => {
            const handleDeleteBook = (id) => dispatch(deleteBook(book.id))

            const handleToggleFavorite = (id) =>
              dispatch(toggleFavorite(book.id))

            return (
              <li key={book.id}>
                <div className='book-info'>
                  {++i}. {book.title} by <strong>{book.author}</strong>
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
