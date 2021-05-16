import React, { Fragment, Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2'




class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: this.props.labels,
                datasets: [
                    {
                        label: this.props.label,
                        data: this.props.data,
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
            },
        }

    }

    render() {

        return (
            <Fragment>
                <div className="chart-box">
                    <p>Chart</p>
                    <Bar data={this.state.chartData} options={{}} />
                </div>
            </Fragment>
        );
    }
}
export default Chart;