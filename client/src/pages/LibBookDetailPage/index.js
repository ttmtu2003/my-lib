import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import DatePicker from 'react-datepicker'
import { Cover } from '../../components/HeroFrame'
import NavBar from '../../components/Navbar/Navbar'
import _upperFirst from 'lodash/upperFirst'
import _each from 'lodash/each'
import _map from 'lodash/map'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
// images
import defaultBook from '../../images/defaultBook.png'
import { Rating } from 'react-simple-star-rating'
import './style.scss'
import { getLibBookDetail, updateBookDetail, deleteBook } from '../../APIFunctions/MyLib'
import DropDown from '../../components/DropDown'
import { differenceInDays } from 'date-fns'

const LibBookDetailPage = () => {
  const [rating, setRating] = useState(0)
  const [startDates, setStartDate] = useState(new Date())
  const [doneDates, setDoneDate] = useState(new Date())
  const [status, setStatus] = useState('---')
  const [comments, setComments] = useState('')

  const statusList = ['Not started', 'Reading', 'Finished']

  const token = window.localStorage ? window.localStorage.getItem('token') : ''

  // get selected book detail in local storage
  let book = window.localStorage.getItem('libraryBook')
  let selectedBook = JSON.parse(book)
  
  let imgSrc = selectedBook?.imageLinks?.thumbnail.replace('&edge=curl','')

  // handle book rating
  const handleRating = async (rate) => {
    setRating(rate)
  }

  // handle book rating
  const handleStartDate = async (date) => {
    setStartDate(date)
  }
  
  const handleDoneDate = async (date) => {
    setDoneDate(date)
  }

  const handleComments = async (e) => {
    e.preventDefault()
    setComments(e.target.value)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(differenceInDays(doneDates, startDates) < 0) alert("Finished date cannot be before start date")
    else {
      const res = await updateBookDetail(token, selectedBook?._id, rating, status, startDates, doneDates, comments)
      alert(res.data.message)
    }

  }

  const handleDeleteBook = async () => {
    const res = await deleteBook(token, selectedBook?._id)
    if(res.status === 200)
      window.location.href = '/mylibrary'
  }

  
  // render current rating value when page loaded
  useEffect(() => {
    const displayRatingOnRefresh = async () => {
      // query book detail data from DB
      const { rating, status, startDate, doneDate, comment } = await getLibBookDetail(token, selectedBook?._id)
      status && setStatus(status)
      rating && setRating(rating)
      startDate && setStartDate(new Date(startDate))
      doneDate && setDoneDate(new Date(doneDate))
      comment && setComments(comment)
    }

    displayRatingOnRefresh()
    
  }, [])


  // if status is not finished, remove done date data
  // if status is not started, remove start date data
  useEffect(() => {
    if(status !== 'Finished')  {
      setDoneDate(null)
      
      if(status === 'Not started') 
        setStartDate(null)
    }
  }, [status])

  return (
    <div>
      <NavBar />
      <Cover className="lib-detail-cover">
        <h1 className='t-w-3/4 t-text-white t-font-bold t-text-[2rem] md:t-text-[4rem] t-text-center t-leading-normal'>{selectedBook?.title || "Untitled"}</h1>
      </Cover>

      <Form onSubmit={handleSubmit} className="t-mt-[3rem] mx-auto md:t-w-[70rem]">
        <Row>
          <Col xs={12} sm={4}>
            
            {/* Book cover */}
            <Row>
              <img className="t-w-[13rem] mx-auto" src={imgSrc || defaultBook} alt="N/A" />
            </Row>

            <FormGroup className="t-flex t-justify-center mt-3">
              <Rating onClick={handleRating} initialValue={rating} size={30} transition  />
            </FormGroup>

            <FormGroup>
              <Row className="ml-12 ml-sm-4 t-flex t-justify-center mt-3">
                <Col xs={3}>
                  <h3 className="t-text-white">Status: </h3>
                </Col>
                <Col xs={9}>
                  <DropDown dropdownList={statusList} filter={status} setFilter={setStatus} />
                </Col>
              </Row>
            </FormGroup>
            
            {(status === 'Reading' || status === 'Finished') && (
              <FormGroup>
                <Row  className="ml-12 ml-sm-4 t-flex t-justify-center mt-2">
                  <Col xs={3}>
                    <h3 className="t-text-white">Start: </h3>
                  </Col>
                  <Col xs={9}>
                    <DatePicker className="ml-1 sm:t-w-[7rem] md:t-w-[10rem]" selected={startDates} onChange={(date) => handleStartDate(date)} />
                  </Col>
                </Row>
              </FormGroup>
            )}

            {status === 'Finished' && (
              <FormGroup>
                <Row className="ml-12 ml-sm-4 t-flex t-justify-center mt-3">
                  <Col xs={3}>
                    <h3 className="t-text-white">Finished: </h3>
                  </Col>
                  <Col xs={9}>
                    <DatePicker className="ml-1 sm:t-w-[7rem] md:t-w-[10rem]" selected={doneDates} onChange={(date) => handleDoneDate(date)} />
                  </Col>
                </Row>
              </FormGroup>
            )}
          </Col>
          
          <Col xs={12} sm={6} className="t-px-10 sm:t-px-0 sm:t-ml-10 mt-3 mt-sm-0">
            {/* Book title */}
            <h1 className="t-text-[1.5rem] t-text-[#C7930E] sm:t-text-[2rem] t-font-bold">{_upperFirst(selectedBook?.title)}</h1>
            
            {/* Book authors */}
            <h4 className="t-text-[#ADA89E] t-italic mt-2">by {selectedBook?.authors?.join(', ') || 'Unknown'}</h4>

            {/* Comments */}
            <FormGroup className="t-text-white t-flex t-flex-col mt-3">
              <Label for="comment">
                Comments:
              </Label>
              <Input
                className="t-bg-[#F2F0ED] t-h-[18rem]"
                type="textarea"
                value={comments}
                id="comments"
                onChange={e => handleComments(e)}
              />
            </FormGroup>

            <div className='t-absolute t-right-10 sm:t-right-0'>
              <Button onClick={handleDeleteBook} className="hover:t-cursor-pointer t-bg-transparent hover:t-bg-[#ae2220] border-danger text-danger hover:!t-text-white">
                Delete
              </Button>
              <Button className="ml-2 hover:t-cursor-pointer  hover:t-bg-[#ac8010] t-bg-[#C7930E]" type="submit">
                Update
              </Button>
            </div>

          </Col>
        </Row>
      </Form>
      
      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default LibBookDetailPage