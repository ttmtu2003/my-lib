import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import 'react-datepicker/dist/react-datepicker.css'
import './style.scss'

const DropDown = ({className, dropdownList, filter, setFilter}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleDropDown = async (e) => {
    e.preventDefault()
    setFilter(e.target.textContent)
  }
  return (
    <Dropdown className={className} isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="ml-1 t-w-fit" caret>{filter}</DropdownToggle>
        <DropdownMenu>
          {dropdownList.map((filter, index) => (
            <DropdownItem key={index}>
              <div onClick={handleDropDown}>{filter}</div>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
  )
}

export default DropDown