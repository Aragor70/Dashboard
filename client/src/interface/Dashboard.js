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
        
        
    }, [ year, region, doughnutSelect, platform, projects]);
    console.log(platform)
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
        
        
    }, [ year, region, chartSelect, platform, projects ]);


    return (
        <Fragment>
            <section className="dashboard-content">
                
                
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
                
                
                <section className="main-tables">

                    <div className="main-table">
                        <p><span>Platform</span></p>
                        <ul><li style={ platform ? { color: '#000' } : { color: 'green' } } onClick={e=> setPlatform("")}>All</li><li>filter by ...</li></ul>
                        <table>
                            <tr><th>ID</th><th>Platform name</th></tr>
                            {
                                platforms.map((element, index) => <tr style={ element === platform ? { color: 'green' } : { color: '#000' } } key={index} onClick={e=> setPlatform(element)}><td>{index + 1}.</td><td>{element}</td></tr>)
                            }
                        </table>
                    </div>

                    <div className="main-table">
                        <p><span>Project</span></p>
                        <ul><li style={ project ? { color: '#000' } : { color: 'green' } } onClick={e=> setProject(null)}>All</li><li>filter by ...</li></ul>
                        <table>
                            <tr><th>ID</th><th>Project name</th></tr>
                            {
                                projects.map((element, index) => <tr style={ project ? element.projectName === project.projectName ? { color: 'green' } : { color: '#000' } : { color: '#000' } } key={index} onClick={e=> setProject(element)}><td>{index + 1}.</td><td>{element.projectName}</td></tr>)
                            }
                        </table>
                    </div>
                </section>
            </section>
        </Fragment>
    );
}
export default Dashboard;