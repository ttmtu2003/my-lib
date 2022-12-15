import React from 'react'
import Footer from '../../components/Footer'
import { Cover } from '../../components/HeroFrame'
import NavBar from '../../components/Navbar/Navbar'
import _upperFirst from 'lodash/upperFirst'
import _each from 'lodash/each'
import _map from 'lodash/map'
import { Col, Row } from 'reactstrap'
import { addToLibrary } from '../../APIFunctions/Explore'
// images
import defaultBook from '../../images/defaultBook.png'

const BookDetailPage = () => {
  // get selected book detail in local storage
  const book = window.localStorage ? window.localStorage.getItem('exploreBook') : '{}'
  const token = window.localStorage ? window.localStorage.getItem('token') : ''
  let selectedBook = JSON.parse(book)

  let imgSrc = selectedBook?.imageLinks?.thumbnail.replace('&edge=curl','')

  const handleSubmit = async () => {
    let data = await addToLibrary(token, selectedBook?._id)
    if(data.status === 200) alert(data.data.message)

  }
  return (
    <div>
      <NavBar />
      <Cover>
        <h1 className='t-text-[2rem] t-w-3/4 t-text-white t-font-bold md:t-text-[4rem] t-text-center t-leading-normal'>{selectedBook?.title}</h1>
      </Cover>
      
      <Row className="book-detail mx-auto md:t-w-[70rem] d-flex">
        <Col xs={12} sm={3} className="my-auto">
          <Row>
            <img className="t-w-[13rem] mx-auto" src={imgSrc || defaultBook} alt="N/A" />
          </Row>
          <Row className="mt-3">
            <button onClick={handleSubmit} className="mx-auto rounded-full px-4 py-2 t-text-[12px] t-bg-[#C7930E] hover:t-bg-[#ac8010] t-font-bold t-text-white">Add to library</button>
          </Row>
        </Col>
        
        <Col xs={12} sm={8} className="t-px-10 sm:t-px-0 mt-3 mt-sm-0 sm:t-ml-10">
          <Row>
            <h1 className="t-text-[1rem] t-text-[#C7930E] sm:t-text-[2rem] t-font-bold">{_upperFirst(selectedBook?.title)}</h1>
          </Row>
          <Row>
            <h4 className="t-text-[#ADA89E] t-italic mt-2">by {selectedBook?.authors?.join(', ') || 'Unknown'}</h4>
          </Row>
          <Row className="d-flex t-text-white mt-3">
            <h4 className="t-text-[0.87rem] sm:t-text-[1rem]">Publisher: {selectedBook?.publisher || "---"}</h4>
            <h4 className="ml-6">|</h4>
            <h4 className="sm:ml-6 t-text-[0.87rem] sm:t-text-[1rem]">Dates: {selectedBook?.publishedDate}</h4>
          </Row>
          <Row>
            <p className="t-text-white t-text-justify mt-3 t-text-[0.87rem] sm:t-text-[1rem]">{selectedBook?.description}</p>
          </Row>
        </Col>
       
      </Row>

      <Footer />
    </div>
  )
}

export default BookDetailPage