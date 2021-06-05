import React, { Fragment, useEffect, useState } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'




const Chart = ({ data, label, labels, doughnutSelect, setDoughnutSelect, platform }) => {

    const [chartData, setChartData] = useState(null)

    useEffect(() => {

        setChartData({
            labels,
            datasets: [
                {
                    label,
                    data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }
            ]
        });
        
        return () => {
            setChartData(null);
        }

    }, [data, labels, label, doughnutSelect, platform])
    
    const handleChange = (e) => {
        setDoughnutSelect(e.target.value)
    }

        return (
            <Fragment>
                <div className="doughnut-box">
                    <p><span>{label}</span>
                    <select onChange={e => handleChange(e)}>
                        <option value="region">region</option>
                        <option value="status">status</option>
                    </select>
                    </p>
                    
                    <Doughnut data={chartData} options={{}} />
                    
                </div>
            </Fragment>
        );
}
export default Chart;