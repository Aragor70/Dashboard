import React, { Fragment, useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import { makeFirstUpper } from '../functions/stringFunction';
import { Route, Switch } from 'react-router-dom';



const App = () => {

  const dataset = [
    {
      id: 0,
      year: 2020,
      region: "UK + IRE",
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
      region: "S Europe",
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
  const [ region, setRegion ] = useState('')
  const [ platform, setPlatform ] = useState('')

  const [ years, setYears ] = useState([])
  const [ regions, setRegions ] = useState([])
  const [ platforms, setPlatforms ] = useState([])

  console.log(year, 'year')
  console.log(region, 'region')
  console.log(platform, 'platform')

  useEffect(() => {

    const doFilter = dataset.filter((element) => region ? element.region === region : true ).filter((element) => year ? element.year === year : true )
    
    /* const selectYears = dataset.map((element) => element.year)
    const selectRegions = dataset.map((element) => element.region) */
    const selectPlatforms = doFilter.map((element) => element.platforms)

    const yearNames = [...new Set(dataset.flat(1).map((element) => element.year))]
    const regionNames = [...new Set(dataset.flat(1).map((element) => element.region))]
    const platformNames = [...new Set(selectPlatforms.flat(1).map((element) => element.name))]

    setYears(yearNames)
    setRegions(regionNames)
    setPlatforms(platformNames)
    
    if (platform && !platformNames.includes(platform)) setPlatform("");
    
  }, [year, region]);





  const data = [ 1, 5, 2, 4 ]

  const labels = [ 'A', 'B', 'C', 'D' ]

  return (
    <Fragment>
      <header className="App-header">

        <Header />

      </header>
      <main>

        <Switch>
          <Route exact path="/">

            <h3 className="page-title">Summary</h3>

            <div className="choice-box">
              <p><span>Year</span></p>
              <ul>
                <li style={ year ? { color: '#000' } : { color: 'green' } } onClick={e=> setYear(null)}><span>All</span></li>
                {
                  years.map((element, index) => <li style={ element === year ? { color: 'green' } : { color: '#000' } } key={index} onClick={e=> setYear(element)}><span>{element}</span></li>)
                }
              </ul>
            </div>

            <div className="choice-box">
              <p><span>Region</span></p>
              <ul>
                <li style={ region ? { color: '#000' } : { color: 'green' } } onClick={e=> setRegion(null)} onClick={e=> setRegion("")}><span>All</span></li>
                {
                  regions.map((element, index) => <li style={ element === region ? { color: 'green' } : { color: '#000' } } key={index} onClick={e=> setRegion(element)}><span>{element}</span></li>)
                }

                
              </ul>
            </div>
            
            <div className="choice-box">
              <p><span>Platform</span></p>
              <ul>
                <li style={ platform ? { color: '#000' } : { color: 'green' } } onClick={e=> setPlatform("")}><span>All</span></li>
                {
                  platforms.map((element, index) => <li style={ element === platform ? { color: 'green' } : { color: '#000' } } key={index} onClick={e=> setPlatform(element)}><span>{makeFirstUpper(element)}</span></li>)
                }

              </ul>
            </div>
            
            <div className="output">

              <Dashboard data={data} labels={labels} />
              

            </div>
          </Route>

        </Switch>
      </main>
      <footer>
        
      </footer>
    </Fragment>
  );
}

export default App;
