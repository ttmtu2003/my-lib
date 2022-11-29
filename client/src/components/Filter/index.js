import React, { useContext } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { SearchContext } from '../../pages/ExplorePage'

const Filter = ( { className } ) => {
  const { handleChange, handleSubmit } = useContext(SearchContext)

  return (
    <div className='t-font-light'>
      <Form className="t-flex" onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="t-text-white t-font-semibold t-text-xs lg:t-text-base" for="searchbar">
            Enter a keyword or a book
          </Label>
          <Input 
            className="t-w-[50vw] t-px-2 t-bg-[#F2F0ED] t-h-[1.8rem] t-border-0 t-rounded mt-[0.5em] focus:t-border-[1px] focus:t-outline-none focus:t-border-orange-300 focus:!t-shadow-none"
            onChange={handleChange}
            id="searchbar"
            placeholder="Search"
          />
        </FormGroup>
      </Form>
    </div>
  )
}

export default Filter