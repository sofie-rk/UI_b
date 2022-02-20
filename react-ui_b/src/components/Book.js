
const Book = ( {book} ) => {
  return (
    <div className='book'>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <img src={(book.imageloc)} alt='Book cover' className='coverImage'/>
        <p className='review'>{book.review}</p>
    </div>
  )
}

export default Book