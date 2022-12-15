import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';

const PieChart = ({ className, booksRead }) => {
  const [genreStats, setGenreStats] = useState([]);

  useEffect(() => {
    const genreObj = booksRead
    .map((book) => book?.books?.categories[0])
    .reduce((genreCounts, genre) => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1
      return genreCounts
    }, {})

    setGenreStats(Object.entries(genreObj).map(([id, value]) => ({ id, value })))
  }, [booksRead])

  const categories = genreStats.map((genre) => genre.id)
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Total',
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)"
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        data: genreStats,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right"
      },

    }
    
  }

  return (
    <div className={className}>
      <Pie className="t-w-full mt-3"  data={data} options = {options} weight={600} height={600} />
    </div>
  ) 
}

export default PieChart