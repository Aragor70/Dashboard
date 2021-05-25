import React, { Fragment } from 'react';
import Chart from './Chart';





const Dashboard = ({ data, labels }) => {


    


    return (
        <Fragment>
            
            <Chart label="Country" data={data} labels={labels} />


        </Fragment>
    );
}
export default Dashboard;