import React from 'react'
import Footer from '../../components/Footer'
import HeroFrame, { Cover } from '../../components/HeroFrame'
import NavBar from '../../components/Navbar/Navbar'
import _upperFirst from 'lodash/upperFirst'
import _each from 'lodash/each'
import _map from 'lodash/map'
import { Button, Col, Row } from 'reactstrap'
import { addToCollection } from '../../APIFunctions/Explore'
// images
import defaultBook from '../../../public/images/defaultBook.png'

const BookDetailPage = () => {
  // get selected book detail in local storage
  const book = localStorage.getItem('exploreBook')
  const token = localStorage.getItem('token')
  let selectedBook = JSON.parse(book)

  let imgSrc = selectedBook?.imageLinks?.thumbnail.replace('&edge=curl','')
  console.log("SELEC", selectedBook)

  const handleSubmit = async () => {
    await addToCollection(token, selectedBook?._id)
  }
  return (
    <div>
      <NavBar />
      <Cover>
        <h1 className='t-w-3/4 t-text-white t-font-bold t-text-[4rem] t-text-center t-leading-normal'>{selectedBook.title}</h1>
      </Cover>
      
      <Row xs={2} className="mx-auto t-w-[70rem] d-flex">
        <Col xs={3} className="my-auto">
          <Row>
            <img className="t-w-[13rem] mx-auto" src={imgSrc || defaultBook} alt="N/A" />
          </Row>
          <Row className="mt-3">
            <button onClick={handleSubmit} className="mx-auto rounded-full px-4 py-2 t-text-[12px] t-bg-[#C7930E] hover:t-bg-[#ac8010] t-font-bold t-text-white">Add to collection</button>
          </Row>
        </Col>
        
        <Col xs={8} className="ml-8">
          <Row>
            <h1 className="t-text-[#C7930E] t-text-[2rem] t-font-bold">{_upperFirst(selectedBook?.title)}</h1>
          </Row>
          <Row>
            <h4 className="t-text-[#ADA89E] t-italic mt-2">by {selectedBook?.authors?.join(', ') || 'Unknown'}</h4>
          </Row>
          <Row className="d-flex t-text-white mt-3">
            <h4 className="">Publisher: {selectedBook?.publisher || "---"}</h4>
            <h4 className="ml-6">|</h4>
            <h4 className="ml-6">Dates: {selectedBook?.publishedDate}</h4>
          </Row>
          <Row>
            <p className="t-text-white t-text-justify mt-3">{selectedBook?.description}</p>
          </Row>
        </Col>
       
      </Row>

      <Footer />
    </div>
  )
}

export default BookDetailPage