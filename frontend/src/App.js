import { lazy, Suspense } from 'react'
import './App.css'
// Використовуємо React.lazy для ледачого завантаження компонентів
const BookList = lazy(() => import('./components/BookList/BookList'))
const BookForm = lazy(() => import('./components/BookForm/BookForm'))
const Filter = lazy(() => import('./components/Filter/Filter'))
const Error = lazy(() => import('./components/Error/Error'))

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Book Library App</h1>
      </header>

      <main className='app-main'>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <div className='app-left-column'>
            <BookForm />
          </div>
          <div className='app-right-column'>
            <Filter />
            <BookList />
          </div>
          <Error />
        </Suspense>
      </main>
    </div>
  )
}

export default App
