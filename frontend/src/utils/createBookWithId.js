const createBookWithId = (book) => {
  return { ...book, id: crypto.randomUUID(), isFavorite: false }
}

export default createBookWithId
