# Book Library App

An application for managing your personal book library with the ability to add, delete, and mark favorite books.

## Project Structure

The project consists of two main parts:

### Frontend (React)

The client side of the application, developed using React and Redux for state management.

```
frontend/
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── BookForm/   # Book addition form
│   │   ├── BookList/   # List of books
│   │   ├── Error/      # Error display component
│   │   └── Filter/     # Book filtering
│   ├── redux/          # Redux state
│   │   ├── slices/     # Redux slices
│   │   │   ├── booksSlice.js  # Book management
│   │   │   └── filterSlice.js # Filter management
│   │   └── store.js    # Redux store configuration
│   ├── utils/          # Utilities
│   ├── data/           # Local data
│   ├── App.js          # Main component
│   ├── App.css         # Main component styles
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
└── package.json        # Dependencies and scripts
```

### Backend (Node.js/Express)

The server side of the application that provides an API for retrieving book data.

```
api/
├── data/               # Data
│   └── books.json      # JSON file with books
├── index.js            # Main server file
└── package.json        # Dependencies and scripts
```

## Functionality

### Frontend

- Adding new books through a form
- Deleting books from the list
- Marking books as favorites
- Filtering books by various criteria
- Getting a random book from the API
- Error handling

### Backend

- API for getting a random book (`/random-book`)
- API with delay for demonstrating asynchronous requests (`/random-book-deleyed`)

## Technologies

### Frontend

- React.js
- Redux (Redux Toolkit)
- Axios for HTTP requests
- React Icons
- React Toastify for notifications
- Redux Persist for state persistence

### Backend

- Node.js
- Express.js
- CORS for cross-domain requests

## Installation and Running

### Frontend

```bash
cd frontend
npm install
npm start
```

The application will be available at: http://localhost:3000

### Backend

```bash
cd api
npm install
node index.js
```

The server will run on port 4000: http://localhost:4000

## API Endpoints

- `GET /random-book` - get a random book
- `GET /random-book-deleyed` - get a random book with delay (for demonstrating asynchronous requests)

## Project Features

- Using Redux for application state management
- Asynchronous API requests using createAsyncThunk
- Persisting application state between sessions using Redux Persist
- Error handling and notification display
- Filtering and sorting books
