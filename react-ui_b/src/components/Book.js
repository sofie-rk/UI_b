import { useState } from "react"

import Button from "./Button"
const Book = ( {book} ) => {

  const [showReview, setShowReview] = useState(false)

  const openAndCloseReview = (id) => {
    setShowReview(!showReview)
  }
  return (
    <div className='book'>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <img src={(book.imageloc)} alt='Book cover' className='coverImage'/>
        <Button 
          color={'grey'}
          onClick={() => openAndCloseReview(book.id)}
          text={showReview ? 'Close Review': 'Open Review'}
        />
        <p className='review'>{showReview ? book.review : ' '}</p>
    </div>
  )
}

export default Book