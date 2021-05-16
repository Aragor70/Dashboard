import React, { Fragment } from 'react';
import Chart from './Chart';





const Dashboard = ({ data, labels }) => {


    


    return (
        <Fragment>
            
            <Chart labels={labels} label="Country" data={data} />


        </Fragment>
    );
}
export default Dashboard;