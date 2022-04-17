import Book from "./Book"

const BookReview = ( { books }) => {

  // Sort alphabetically by title
  books.sort((a,b) => a.title.localeCompare(b.title))
    
  return (
    <>
    {books.map((book, index) => (
    <Book key={index} book={book}/>
    )) }
    </>
  )
}

export default BookReview