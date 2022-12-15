import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'



const BarChart = ({ className, booksRead }) => {
  const [totalReadPerYear, setTotalReadPerYear] = useState({});

  useEffect(() => {
    const yearData = {};
    booksRead.map(bookRead => {
      const year = bookRead.doneDate.slice(0, 4);
      yearData[year] = (yearData[year] || 0) + 1;
      setTotalReadPerYear(yearData);
    })
  }, [booksRead])
  
  const data = {
    labels: Object.keys(totalReadPerYear).reverse(),
    datasets: [
      {
        label: 'Total Number of Books',
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
        borderWidth: 1,
        maxBarThickness: 60,
        data: Object.values(totalReadPerYear).reverse(),
      },
    ],
  }

  const options = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 16,
          },
          color: '#FFFF',
          precision: 0
        },
      },
      y: {
        ticks: {
          font: {
            size: 20,
            weight: 'bold',
          },
          color: '#FFFF',
        },
        grid: {
          display: false,
        },
      },
    },
    label: {
      fontSize: 3,
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 16,
        },
      },
    },
  }  

  return (
    <div className={className}>
      <Bar className="t-w-full mt-3" options={options} data={data} />
    </div>
  ) 
}

export default BarChart