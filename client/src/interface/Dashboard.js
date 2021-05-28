import React, { Fragment, useEffect, useState } from 'react';
import Doughnut from './Doughnut';
import Chart from './Chart';





const Dashboard = ({ dataset, year, region, platform, platforms, setPlatform, project, projects, setProject }) => {

    
    return (
        <Fragment>
            <section className="dashboard-content">
                

                <Doughnut label="Number by regions" data={[...dataset.map((element) => element.platforms.length)]} labels={[...dataset.map((element) => element.region)]} />
                <Chart label="Number in timeline" data={[...dataset.map((element) => element.platforms.length)]} labels={[...dataset.map((element) => element.region)]} />

                
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