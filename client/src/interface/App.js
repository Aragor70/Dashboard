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
          platformId: 211,
          platform: 'Futurebricks',
          countryOfPlatform: 'United Kingdom',
          url: false,
          id: 'Barnes-Hill,-Birmingham',
          projectName: 'Barnes Hill, Birmingham',
          status: 'PAID_OUT',
          typeOfInvestment: 'DEBT',
          typeOfProperty: false,
          project: false,
          term: false,
          yieldPA: 8,
          totalYield: false,
          volumeTotal: 78000,
          volumeInvested: false,
          volumeLeft: false,
          currency: '£',
          minimumInvestment: false,
          country: 'United Kingdom',
          numberOfInvestors: false,
          scrapedAt: '26/05/2021 - 17:56'
        },
        {
          platformId: 211,
          platform: 'Futurebricks',
          countryOfPlatform: 'United Kingdom',
          url: false,
          id: 'The-Bell-Project,-Stourbridge',
          projectName: 'The Bell Project, Stourbridge',
          status: 'PAID_OUT',
          typeOfInvestment: 'DEBT',
          typeOfProperty: false,
          project: false,
          term: false,
          yieldPA: 18,
          totalYield: false,
          volumeTotal: 100000,
          volumeInvested: false,
          volumeLeft: false,
          currency: '£',
          minimumInvestment: false,
          country: 'United Kingdom',
          numberOfInvestors: false,
          scrapedAt: '26/05/2021 - 17:56'
        },
        {
          platformId: 211,
          platform: 'Futurebricks',
          countryOfPlatform: 'United Kingdom',
          url: false,
          id: 'Development-of-a-4-bedroom-home',
          projectName: 'Development of a 4-bedroom home',
          status: 'PAID_OUT',
          typeOfInvestment: 'DEBT',
          typeOfProperty: false,
          project: false,
          term: false,
          yieldPA: 12,
          totalYield: false,
          volumeTotal: 100000,
          volumeInvested: false,
          volumeLeft: false,
          currency: '£',
          minimumInvestment: false,
          country: 'United Kingdom',
          numberOfInvestors: false,
          scrapedAt: '26/05/2021 - 17:56'
        }
      ]
    },
    {
      id: 1,
      year: 2019,
      region: "S Europe",
      platforms: [
        {
          platformId: 190,
          platform: 'StockCrowd IN',
          countryOfPlatform: 'Spain',
          url: 'https://www.stockcrowdin.com/boxweb/dinerario/192?',
          id: 480482431,
          projectName: 'La Garriga',
          status: 'PAID_OUT',
          typeOfInvestment: 'DEBT',
          typeOfProperty: 'RESIDENTIAL',
          project: 'EXISTING',
          term: 9,
          yieldPA: false,
          totalYield: 17.98,
          volumeTotal: 270000,
          volumeInvested: false,
          volumeLeft: 0,
          currency: '€',
          minimumInvestment: 50,
          country: 'Spain',
          numberOfInvestors: 11,
          scrapedAt: '26/05/2021 - 17:38'
        },
        {
          platformId: 190,
          platform: 'StockCrowd IN',
          countryOfPlatform: 'Spain',
          url: false,
          id: -1363971089,
          projectName: 'Ragull',
          status: 'PAID_OUT',
          typeOfInvestment: false,
          typeOfProperty: 'RESIDENTIAL',
          project: false,
          term: 8,
          yieldPA: 15,
          totalYield: 9.93,
          volumeTotal: 300000,
          volumeInvested: false,
          volumeLeft: 0,
          currency: '€',
          minimumInvestment: 1000,
          country: 'Spain',
          numberOfInvestors: 18,
          scrapedAt: '26/05/2021 - 17:38'
        },
        {
          platformId: 190,
          platform: 'StockCrowd IN',
          countryOfPlatform: 'Spain',
          url: false,
          id: -1479965196,
          projectName: 'Marqués de Cádiz - Málaga',
          status: 'CANCELED',
          typeOfInvestment: false,
          typeOfProperty: 'RESIDENTIAL',
          project: false,
          term: 12,
          yieldPA: 8,
          totalYield: 8,
          volumeTotal: 500000,
          volumeInvested: false,
          volumeLeft: 338594,
          currency: '€',
          minimumInvestment: 500,
          country: 'Spain',
          numberOfInvestors: 58,
          scrapedAt: '26/05/2021 - 17:38'
        }
      ]
    }
  ]
  const [ year, setYear ] = useState(null)
  const [ region, setRegion ] = useState('')
  const [ platform, setPlatform ] = useState('')
  const [ project, setProject ] = useState(null)

  const [ years, setYears ] = useState([])
  const [ regions, setRegions ] = useState([])
  const [ platforms, setPlatforms ] = useState([])
  const [ projects, setProjects ] = useState([])

  console.log(year, 'year')
  console.log(region, 'region')
  console.log(platform, 'platform')

  useEffect(() => {

    const doFilter = dataset.filter((element) => region ? element.region === region : true ).filter((element) => year ? element.year === year : true )
    
    /* const selectYears = dataset.map((element) => element.year)
    const selectRegions = dataset.map((element) => element.region) */
    const selectPlatforms = doFilter.filter((element) => year ? element.year === year : true).filter((element) => region ? element.region === region : true).map((element) => element.platforms)
    
    const yearNames = [...new Set(dataset.flat(1).map((element) => element.year))]
    const regionNames = [...new Set(dataset.flat(1).map((element) => element.region))]
    const platformNames = [...new Set(selectPlatforms.flat(1).map((element) => element.platform))]
    const projects = selectPlatforms.flat(1).filter((element) => platform ? element.platform === platform : true).map((element) => element)

    setYears(yearNames)
    setRegions(regionNames)
    setPlatforms(platformNames)
    setProjects(projects)
    
    if (platform && !platformNames.includes(platform)) setPlatform("");
    
  }, [year, region, platform]);

  console.log(regions)
  const data = [ 2, 4, 2, 4 ]

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
            <nav>
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
              <div className="main-intro">
                    <p>UK + IRE</p>
                    <ul>
                        <li>currenctly</li>
                        <li>10-05-2021</li>
                    </ul>
              </div>
              <div className="main-calendar">
                  <p><span>Calendar</span></p>
                  <ul>
                      <li>Mon (24-05)</li>
                      <li>Tue (25-05)</li>
                      <li>Wed (26-05)</li>
                      <li>Thu (27-05)</li>
                      <li>Fri (28-05)</li>
                      <li>Sat (29-05)</li>
                      <li>Sun (30-05)</li>
                  </ul>
              </div>
            </nav>
            
            <div className="output">

              <Dashboard dataset={dataset} year={year} region={region} platform={platform} platforms={platforms} setPlatform={setPlatform} project={project} projects={projects} setProject={setProject} />
              

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
