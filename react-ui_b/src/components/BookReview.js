import Book from "./Book"

const BookReview = ( { books }) => {

    
  return (
    <>
    {books.map((book, index) => (
    <Book key={index} book={book}/>
    )) }
    </>
  )
}

export default BookReview