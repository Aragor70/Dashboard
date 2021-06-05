/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';
import Doughnut from './Doughnut';
import Chart from './Chart';





const Dashboard = ({ dataset, year, region, platform, platforms, setPlatform, project, projects, setProject }) => {

    const [ doughnutData, setDoughnutData ] = useState([]);
    const [ doughnutLabels, setDoughnutLabels ] = useState([]);
    const [ doughnutLabel, setDoughnutLabel ] = useState("");
    const [ doughnutSelect, setDoughnutSelect ] = useState("")

    const [ chartData, setChartData ] = useState([]);
    const [ chartLabels, setChartLabels ] = useState([]);
    const [ chartLabel, setChartLabel ] = useState("");
    const [ chartSelect, setChartSelect ] = useState("")

    const [ searchData, setSearchData ] = useState({
        project: "",
        platform: "",
    })
    const [ searchTogglePlatform, setSearchTogglePlatform ] = useState(false)
    const [ searchToggleProject, setSearchToggleProject ] = useState(false)

    const handleSearchChange = (e) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value })

    }




    useEffect(() => {
        
        if (doughnutSelect === "" || doughnutSelect === "region") {
            setDoughnutData([...dataset.filter((element) => year ? element.year === year : true).filter((element) => region ? element.region === region : true).map((element) => element.platforms.length)])
            setDoughnutLabels([...dataset.filter((element) => year ? element.year === year : true).filter((element) => region ? element.region === region : true).map((element) => element.region)])    
            setDoughnutLabel("Number of projects")
        } else {
            setDoughnutData([])
            setDoughnutLabels([])
            setDoughnutLabel("")
        }
        
        if (platform && doughnutSelect === "" || doughnutSelect === "region") {
            setDoughnutData([...projects.filter((element) => element.platform === platform).map((element) => element.volumeTotal)])
            setDoughnutLabels([...projects.filter((element) => element.platform === platform).map((element) => element.projectName)])
            setDoughnutLabel("Platform")
        }
        
        
    }, [ year, region, doughnutSelect, platform, projects, dataset ]);
    
    useEffect(() => {
        
        if (chartSelect === "" || chartSelect === "region") {
            setChartData([...dataset.filter((element) => year ? element.year === year : true).filter((element) => region ? element.region === region : true).map((element) => element.platforms.length)])
            setChartLabels([...dataset.filter((element) => year ? element.year === year : true).filter((element) => region ? element.region === region : true).map((element) => element.region)])    
            setChartLabel("Number of projects")
        } else {
            setChartData([])
            setChartLabels([])
            setChartLabel("")
        }

        if (platform && chartSelect === "" || chartSelect === "region") {
            setChartData([...projects.filter((element) => element.platform === platform).map((element) => element.volumeTotal)])
            setChartLabels([...projects.filter((element) => element.platform === platform).map((element) => element.projectName)])
            setChartLabel("Platform")
        }
        
        
    }, [ year, region, chartSelect, platform, projects, dataset ]);


    return (
        <Fragment>
            <section className="dashboard-content">
                
                <section className="main-charts">
                    <Doughnut label={doughnutLabel} data={doughnutData} labels={doughnutLabels} doughnutSelect={doughnutSelect} setDoughnutSelect={setDoughnutSelect} platform={platform} />
                    
                    {
                        project ? <Fragment>
                            <section className="block-box">
                                
                                <p>{project.projectName || 'N/A'}</p>
                                <ul>
                                    <li><span>status</span> <span>{project.status || 'N/A'}</span></li>
                                    <li><span>typeOfInvestment</span> <span>{project.typeOfInvestment || 'N/A'}</span></li>
                                    <li><span>typeOfProperty</span> <span>{project.typeOfProperty || 'N/A'}</span></li>
                                    <li><span>project</span> <span>{project.project || 'N/A'}</span></li>
                                    <li><span>term</span> <span>{project.term ? project.term + ' months' : 'N/A'}</span></li>

                                    <li><span>yieldPA</span> <span>{project.yieldPA ? project.yieldPA + ' %' : 'N/A'}</span></li>
                                    <li><span>totalYield</span> <span>{project.totalYield ? project.totalYield + ' %' : 'N/A'}</span></li>
                                    <li><span>volumeTotal</span> <span>{project.volumeTotal ? project.currency ? project.volumeTotal + ' ' + project.currency : project.volumeTotal : 'N/A'}</span></li>
                                    <li><span>volumeInvested</span> <span>{project.volumeInvested ? project.currency ? project.volumeInvested + ' ' + project.currency : project.volumeInvested : 'N/A'}</span></li>
                                    <li><span>volumeLeft</span> <span>{project.volumeLeft ? project.currency ? project.volumeLeft + ' ' + project.currency : project.volumeLeft : 'N/A'}</span></li>

                                    <li><span>minimumInvestment</span> <span>{project.minimumInvestment ? project.currency ? project.minimumInvestment + ' ' + project.currency : project.minimumInvestment : 'N/A'}</span></li>
                                    <li><span>country</span> <span>{project.country || 'N/A'}</span></li>
                                    <li><span>numberOfInvestors</span> <span>{project.numberOfInvestors || 'N/A'}</span></li>
                                    <li><span>scrapedAt</span> <span>{project.scrapedAt || 'N/A'}</span></li>
                                </ul>
                            </section>
                        </Fragment> : <Fragment>
                            <Chart label={chartLabel} data={chartData} labels={chartLabels} chartSelect={chartSelect} setChartSelect={setChartSelect} platform={platform} />
                        </Fragment>
                    }
                </section>
                
                <section className="main-tables">

                    <div className="main-table">
                        <p><span>Platform</span></p>
                        <ul><li style={ platform ? { color: '#000' } : { color: 'green' } } onClick={e=> {setPlatform(null), setSearchData({...searchData, platform: ""}), setSearchTogglePlatform(false)}}><span>All</span></li><li className="li-search-field"><button style={ searchTogglePlatform ? { display: 'none' } : searchData.platform ? { display: 'none' } : { display: 'block' } } className="main-table-search-button" onClick={e=> searchData.platform ? setSearchTogglePlatform(true) : setSearchTogglePlatform(!searchTogglePlatform)}>search</button><input style={searchTogglePlatform ? { display: 'block' } : searchData.platform ? { display: 'block' } : { display: 'none' }} className="main-search-input" type="text" name="platform" value={searchData.platform || ""} onChange={e => handleSearchChange(e)} /><button style={searchTogglePlatform ? { display: 'block'} : { display: 'none' }} className="clear-button" onClick={e=> {setSearchTogglePlatform(false), setSearchData({...searchData, platform: ""})}}>X</button></li></ul>
                        <ol>
                            <li><span>ID</span><span>Platform name</span></li>
                            {
                                platforms.map((element, index) => <li style={ element === platform ? { color: 'green' } : { color: '#000' } } key={index}><span onClick={e=> setPlatform(element)}>{index + 1}.</span><span onClick={e=> setPlatform(element)}>{element}</span></li>)
                            }
                        </ol>
                    </div>

                    <div className="main-table">
                        <p><span>Project</span></p>
                        <ul><li style={ project ? { color: '#000' } : { color: 'green' } } onClick={e=> {setProject(null), setSearchData({...searchData, project: ""}), setSearchToggleProject(false)}}><span>All</span></li><li className="li-search-field"><button style={ searchToggleProject ? { display: 'none' } : searchData.project ? { display: 'none' } : { display: 'block' } } className="main-table-search-button" onClick={e=> searchData.project ? setSearchToggleProject(true) : setSearchToggleProject(!searchToggleProject)}>search</button><input style={searchToggleProject ? { display: 'block' } : searchData.project ? { display: 'block' } : { display: 'none' }} className="main-search-input" type="text" name="project" value={searchData.project || ""} onChange={e => handleSearchChange(e)} /><button style={searchToggleProject ? { display: 'block'} : { display: 'none' }} className="clear-button" onClick={e=> {setSearchToggleProject(false), setSearchData({...searchData, project: ""})}}>X</button></li></ul>
                        <ol>
                            <li><span>ID</span><span>Project name</span></li>
                            {
                                projects.map((element, index) => <li style={ project ? element.projectName === project.projectName ? { color: 'green' } : { color: '#000' } : { color: '#000' } } key={index}><span onClick={e=> setProject(element)}>{index + 1}.</span><span onClick={e=> setProject(element)}>{element.projectName}</span></li>)
                            }
                        </ol>
                    </div>
                </section>
            </section>
        </Fragment>
    );
}
export default Dashboard;