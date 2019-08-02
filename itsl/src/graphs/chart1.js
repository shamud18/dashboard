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
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                datasets: [
                    {
                        label: "SQL Sample",
                        //backgroundColor: "rgba(255, 110, 134, 0.8)",
                        data: [46, 32, 46, 80, 55, 73, 60, 79, 22, 80, 55, 22, 56],
                        fill: true,
                        borderWidth: 1.3,
                        borderColor: "rgba(255, 110, 134, 0.8)",
                        pointBackgroundColor: "rgba(255, 110, 134, 0.8)"
                    },
                    {
                        label: "Second SQL Sample",
                        //backgroundColor: "rgba(21, 195, 0, 0.8)",
                        data: [39, 52, 77, 58, 25, 66, 33, 39, 52, 77, 58, 25, 66, 33],
                        fill: true,
                        borderWidth: 1.3,
                        borderColor: "rgba(21, 195, 0, 0.8)"
                    }
                ]
            }
        }
    }


    setGradient = (canvas, color) => {
        let ctx = canvas.getContext('2d');
        console.log(canvas.width);
        const gradient = ctx.createLinearGradient(0, 125, 0, 50);

        console.log(canvas.height);

        let c = color.split(", ");

        c[0] = c[0].replace('rgba(', '');
        
        let one = "rgba(" + c[0] + ", " + c[1] + ", " + c[2] + ", " + "0.0" + ")";
        let two = "rgba(" + c[0] + ", " + c[1] + ", " + c[2] + ", " + "0.4" + ")";

        gradient.addColorStop(1, color);
        gradient.addColorStop(0.37, two);
        gradient.addColorStop(0, one);

        return gradient;
    }

    getChartData = canvas => {
        const data = this.state.data;

        if (data.datasets) {

            let colors = ["rgba(255, 110, 134, 0.8)", "rgba(21, 195, 0, 0.8)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradient(canvas, colors[i]);
                set.borderColor = colors[i];
                set.borderWidth = 1.4;
            })
        }

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
                                top: 40,
                                left: 20,
                                right: 40,
                                bottom: 35
                            }
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    barPercentage: 2,
                                    ticks: {
                                        suggestedMin: 20,
                                        suggestedMax: 100
                                    },
                                    gridLines: {
                                        drawBorder: false,
                                        zeroLineColor: "transparent",
                                        color: "rgba(255, 255, 255, 0.0)"
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    barPercentage: 2,
                                    gridLines: {
                                        drawBorder: false,
                                        zeroLineColor: 'transparent',
                                        color: "rgba(255, 255, 255, 1)"
                                    },
                                    ticks: {
                                        padding: 5
                                    }
                                }
                            ]
                        },
                        maintainAspectRatio: false

                    }}
                    
                    data={this.getChartData}
                    height={250}

                />
            </div>
        );
    }
}