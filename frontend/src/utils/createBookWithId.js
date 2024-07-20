const createBookWithId = (book, source) => {
  return { ...book, source, id: crypto.randomUUID(), isFavorite: false }
}

export default createBookWithId
