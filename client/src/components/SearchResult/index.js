import React from 'react'
import { Search } from 'react-feather'
import { useHistory } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
// images
import defaultBook from '../../../public/images/defaultBook.png'

const SearchResult = ({ renderedItem, searchQuery = '' }) => {

  // -- router --
  const history = useHistory()

  // -- book detail --
  const goToBookDetail = (book) => {
    history.push(`/explore/book-detail/${book.id}`)
    window.localStorage.setItem('exploreBook', JSON.stringify(book))
  }

  return (
    <div className="mt-10">
      <Row>
        <h1 className="w-full t-text-center t-text-white t-font-semibold">SEARCH RESULTS {typeof(renderedItem) === "object" && `(${renderedItem?.length || 0})`}</h1>
      </Row>

      {renderedItem ? 
        (typeof(renderedItem) === "object") && (
          <div>
            <div className="t-text-white t-text-center mt-3">All books matching '{searchQuery}'</div>
            <Row xs={3}>
              {renderedItem.map((item, index) => 
                <Col className="hover:t-cursor-pointer mt-10" key={index} onClick={() => goToBookDetail(item)}>
                  <h1 className="t-text-ellipsis t-whitespace-nowrap t-overflow-hidden t-text-white t-font-semibold t-text-center">{item.title}</h1>
                  <img className="t-w-30 t-h-40 mx-auto mt-2" src={item?.imageLinks?.smallThumbnail || defaultBook} alt={item?.title} />
                </Col>
              )}
            </Row>
          </div>
        ) : (
          <div className="mt-10">
            <h2 className=" t-text-white t-text-center">No result found for '{searchQuery}'</h2>
            <Search size={42} className='mt-4 t-text-white mx-auto' />
          </div>
      )}
    </div>
  )
}

export default SearchResult