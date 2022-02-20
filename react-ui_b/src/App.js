import Header from "./components/Header";
import BookReview from "./components/BookReview"
import { allTheBooks } from "./allTheBooks"

function App() {

  return (
    <div className='container'>
      <Header />
      <BookReview books={allTheBooks}/>
    </div>
  );
}

export default App;
