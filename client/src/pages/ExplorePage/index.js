import React, { createContext, useRef, useState } from 'react'
// api fnc
import { searchBook } from '../../APIFunctions/Explore'
// comps
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import HeroFrame from '../../components/HeroFrame'
import SearchResult from '../../components/SearchResult'

const defaultRenderedItems = 'Loading ...'

export const SearchContext = createContext({})
export const SearchProvider = SearchContext.Provider

const ExplorePage = () => {
  let [ searchQuery, setSearchQuery ] = useState('')
  let [ renderedItem, setRenderedItem ] = useState(defaultRenderedItems)
  
  // -- book query --
  const handleChange = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { status, data } = await searchBook(searchQuery)
    if(status === 200) {
      setRenderedItem(data.booksData)
    } else {
      setRenderedItem(null)
    }
  }

  return (
    <>
      <NavBar />
      <SearchContext.Provider value={{ handleChange: handleChange, handleSubmit: handleSubmit }}>
        <HeroFrame />
      </SearchContext.Provider>
      <SearchResult renderedItem={renderedItem} searchQuery={searchQuery} />
      <Footer />
    </>
  )
}

export default ExplorePage