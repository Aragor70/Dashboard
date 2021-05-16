import React, { Fragment, useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import { makeFirstUpper } from '../functions/stringFunction';



const App = () => {

  const dataset = [
    {
      id: 0,
      year: 2020,
      country: "UK + IRE",
      platforms: [
        {
          name: "A"
        },
        {
          name: "B"
        },
        {
          name: "C"
        },
        {
          name: "D"
        }
      ]
    },
    {
      id: 1,
      year: 2019,
      country: "S Europe",
      platforms: [
        {
          name: "A"
        },
        {
          name: "B"
        },
        {
          name: "E"
        },
        {
          name: "G"
        }
      ]
    }
  ]
  const [ year, setYear ] = useState(null)
  const [ country, setCountry ] = useState('')
  const [ platform, setPlatform ] = useState('')

  const [ platforms, setPlatforms ] = useState([])

  console.log(year, 'year')
  console.log(country, 'country')
  console.log(platform, 'platform')

  useEffect(() => {



    const doFilter = dataset.filter((element) => country ? element.country === country : true ).filter((element) => year ? element.year === year : true )
    
    const selectPlatforms = doFilter.map((element) => element.platforms)

    const platformNames = [...new Set(selectPlatforms.flat(1).map((element) => element.name))]

    setPlatforms(platformNames)
    
    if(platform && !platformNames.includes(platform)) setPlatform("");

  }, [year, country]);


  const years = [ 2019, 2020, 2021 ]

  const countries = [ "UK + IRE", "N Europe", "C Europe", "S Europe" ]


  const data = [ 1, 5, 2, 4 ]

  const labels = [ 'A', 'B', 'C', 'D' ]

  return (
    <Fragment>
      <header className="App-header">

        <Header />

      </header>
      <main>
        <h3 className="page-title">Summary</h3>

        <div className="choice-box">
          <p>Year</p>
          <ul>
            <li onClick={e=> setYear(null)}>All</li>
            {
              dataset.map((element) => <li key={element.id} onClick={e=> setYear(element.year)}>{element.year}</li>)
            }
          </ul>
        </div>

        <div className="choice-box">
          <p onClick={e=> setCountry(null)}>Country</p>
          <ul>
            <li onClick={e=> setCountry("")}>All</li>
            {
              dataset.filter((element) => year ? element.year === year : true ).map((element) => <li key={element.id} onClick={e=> setCountry(element.country)}>{element.country}</li>)
            }

            
          </ul>
        </div>
        
        <div className="choice-box">
          <p>Platform</p>
          <ul>
            <li onClick={e=> setPlatform("")}>All</li>
            {
              platforms.map((element, index) => <li key={index} onClick={e=> setPlatform(element)}>{makeFirstUpper(element)}</li>)
            }

          </ul>
        </div>
        
        <div className="output">

          <Dashboard data={data} labels={labels} />
          

        </div>


      </main>
      <footer>
        
      </footer>
    </Fragment>
  );
}

export default App;
