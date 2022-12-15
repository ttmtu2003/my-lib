import React, { useEffect, useState } from 'react'
import { getAllBookInLibrary } from '../../APIFunctions/MyLib'
import Footer from '../../components/Footer'
import { Cover } from '../../components/HeroFrame'
import NavBar from '../../components/Navbar/Navbar'
// images
import defaultBook from '../../images/defaultBook.png'
import { Col, Row } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const MyLibPage = () => {
  let [ renderedItem, setRenderedItem ] = useState([])
  const token = window.localStorage ? window.localStorage.getItem('token') : ''

  // -- router --
  const history = useHistory()

  // -- book detail --
  const goToBookDetail = (book) => {
    history.push(`/mylibrary/book-detail/${book.id}`)
    window.localStorage.setItem('libraryBook', JSON.stringify(book))
  }

  useEffect(() => {
    const getBooks = async () => {
      let { books } = await getAllBookInLibrary(token)
      setRenderedItem(books)
    }

    getBooks()
    .catch(console.error)
  }, [])

  return(
    <div>
      <NavBar />

      <Cover className="lib-cover">
        <h1 className='t-w-3/4 t-text-white t-font-bold t-text-[4rem] t-text-center t-leading-normal'>My Library</h1>
      </Cover>

      {/* display books in library */}
      <Row xs={3}>
        {renderedItem.map((item, index) => 
          <Col className="hover:t-cursor-pointer mt-10" key={index} onClick={() => goToBookDetail(item.books)}>
            <h1 className="t-text-ellipsis t-whitespace-nowrap t-overflow-hidden t-text-white t-font-semibold t-text-center">{item.books.title}</h1>
            <img className="t-w-50 t-h-60 mx-auto mt-2" src={item.books?.imageLinks?.smallThumbnail || defaultBook} alt={item.books?.title} />
          </Col>
        )}
      </Row>
      <Footer />
    </div>
  )
}

export default MyLibPage