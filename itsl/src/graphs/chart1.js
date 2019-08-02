import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { relative } from 'path';
import { inherits } from 'util';
import { file } from '@babel/types';

export default class FigureOne extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                    {
                        label: "SQL Sample",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        data: [46, 5, 1, 10, 55, 23, 6],
                        fill: false,
                        borderWidth: 3,
                        borderColor: "rgba(255, 255, 255, 0.8)",
                        pointBackgroundColor: "rgba(0, 0, 0, 0.5)"
                    },
                    {
                        label: "Second SQL Sample",
                        backgroundColor: "rgba(110, 165, 255, 0.8)",
                        data: [3, 5, 77, 8, 25, 66, 33],
                        fill: false,
                        borderWidth: 3,
                        borderColor: "rgba(110, 165, 255, 0.8)"
                    }
                ]
            }
        }
    }


    getChartData = canvas => {
        const data = this.state.data;
        return data;
    }
    render() {
        return (
            <div style={{ maxHeight: 250 }}>
                <Line
                    options={{
                        responsive: true,
                        layout: {
                            padding: {
                                top: 20,
                                left: 20,
                                right: 40,
                                bottom: 35
                            }
                        },
                    }}

                    data={this.getChartData}

                />
            </div>
        );
    }
}