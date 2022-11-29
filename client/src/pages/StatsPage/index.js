import { useEffect, useState } from "react"
import { getReadBooks } from "../../APIFunctions/MyLib"
import BarChart from "../../components/StatsChart"
import Footer from "../../components/Footer"
import { Cover } from "../../components/HeroFrame"
import NavBar from "../../components/Navbar/Navbar"
import PieChart from "../../components/GenreChart"
import DropDown from "../../components/DropDown"

const StatsPage = () => {
  const [readBooksStats, setReadBooksStats] = useState(0)
  const [readBooks, setReadBooks] = useState([])
  const [filter, setFilter] = useState('Filter')
  const filterList = ['Year', 'Genre']

  const token = localStorage.getItem('token')


  useEffect(() => {
    const displayReadBookStats = async () => {
      const { booksRead } = await getReadBooks(token)
      setReadBooks(booksRead)
      setReadBooksStats(booksRead.length)
    }
    displayReadBookStats()
  }, [])

  console.log("BOOKS READ", readBooks)
  return(
    <div>
      <NavBar  />
      <Cover>
        <h1 className='t-w-3/4 t-text-white t-font-bold t-text-[4rem] t-text-center t-leading-normal'>MY READING STATS</h1>
        <h3 className='t-text-white t-text-center t-text-[1.5rem]'>Quick summary of my book journey</h3>
      </Cover>

      <h1 className='mt-3 t-text-[2rem] t-font-bold t-text-white t-text-center t-w-full'>You've read <span className="t-text-[#C7930E]">{readBooksStats}</span> {readBooksStats > 1 ? 'books' : 'book'} in total</h1>

      <DropDown className="t-absolute t-right-[8rem]" dropdownList={filterList} filter={filter} setFilter={setFilter} />
      
      {filter !== 'Genre' && (
        <BarChart className="!t-w-[80rem] t-ml-[8rem]" booksRead={readBooks} />
      )}
      
      {filter === 'Genre' && (
        <PieChart className="!t-mt-[1rem] !t-w-[55rem] t-mx-auto" booksRead={readBooks} />
      )}
      <Footer className="mt-1" />
    </div>
  )
}

export default StatsPage