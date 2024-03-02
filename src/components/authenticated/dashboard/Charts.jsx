import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

export const BarChart = ({ records }) => {
    const allAssignmentTypes = ['Lab Assignment', 'General Assignment', 'Zoom Meeting', 'Quiz'];

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const typeCounts = allAssignmentTypes.map(type => {
            const count = records.filter(record => record.assignmentType === type).length;
            return { type, count };
        });

        const totalCount = records.length;

        const chartDataWithAll = [
            { type: 'All Assignments', count: totalCount },
            ...typeCounts
        ];

        setChartData(chartDataWithAll);
    }, [records]);

    const chartOptions = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val;
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories: chartData.map(item => item.type),
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        title: {
            text: 'Assignments Sorted By Type',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444'
            }
        }
    };

    return (
        <div id="bar-chart" className='border px-5 '>
            <ReactApexChart options={chartOptions} series={[{ data: chartData.map(item => item.count) }]} type="bar" height={350} width={600} />
        </div>
    );
};

export const DonutChartStatus = ({ records }) => {
    const [statusData, setStatusData] = useState([]);

    useEffect(() => {
        const statusCounts = {};
        records.forEach(record => {
            statusCounts[record.status] = (statusCounts[record.status] || 0) + 1;
        });
        const data = Object.keys(statusCounts).map(status => ({
            status,
            count: statusCounts[status]
        }));
        setStatusData(data);
    }, [records]);

    const donutOptions = {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    const donutSeries = statusData.map(item => item.count);
    const donutLabels = statusData.map(item => item.status);

    return (
        <div id="donut-chart-status">
            <ReactApexChart options={{ ...donutOptions, labels: donutLabels }} series={donutSeries} type="donut" />
        </div>
    );
};

export const PieChartType = ({ records }) => {
    const allAssignmentTypes = ['Lab Assignment', 'General Assignment', 'Zoom Meeting', 'Quiz'];

    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        const typeCounts = allAssignmentTypes.map(type => {
            const count = records.filter(record => record.assignmentType === type).length;
            return { type, count };
        });

        setTypeData(typeCounts);
        console.log()
    }, [records]);

    const pieOptions = {
        chart: {
            type: 'pie',
        },
        labels: typeData.map(item => item.type),
    };

    const pieSeries = typeData.map(item => item.count);

    return (
        <div id="pie-chart-type" className='border rounded-md flex flex-col' style={{ width: 450, height: 400 }}>
            <ReactApexChart options={{ ...pieOptions }} series={pieSeries} type="pie" />
            <span>Summary</span>
            <div className="flex flex-row gap-2">
                <div className="flex flex-col flex-1">
                    <span><span>{typeData[0]?.type}</span><span>{typeData[0]?.count}</span></span>
                    <span><span>{typeData[1]?.type}</span><span>{typeData[1]?.count}</span></span></div>
                <div className="flex flex-col flex-1">
                    <span><span>{typeData[2]?.type}</span><span>{typeData[2]?.count}</span></span>
                    <span><span>{typeData[3]?.type}</span><span>{typeData[3]?.count}</span></span></div>
            </div>
        </div>
    );
};



export const RadialChartPending = ({ records }) => {
    const [pendingPercentage, setPendingPercentage] = useState(0);

    useEffect(() => {
        const pendingCount = records.filter(record => record.status === 'Pending').length;
        const totalCount = records.length;
        const percentage = (pendingCount / totalCount) * 100;
        setPendingPercentage(percentage);
    }, [records]);

    const radialOptions = {
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '18px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Pending Assignments'],
    };

    const radialSeries = [pendingPercentage];

    return (
        <div id="radial-chart-pending">
            <ReactApexChart options={radialOptions} series={radialSeries} type="radialBar" />
        </div>
    );
};



export const RadialChartCompleted = ({ records }) => {
    const [completedPercentage, setCompletedPercentage] = useState(0);

    useEffect(() => {
        const completedCount = records.filter(record => record.status === 'Completed').length;
        const totalCount = records.length;
        const percentage = (completedCount / totalCount) * 100;
        setCompletedPercentage(percentage);
    }, [records]);

    const radialOptions = {
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Completed Assignments'],
    };

    const radialSeries = [completedPercentage];

    return (
        <div id="radial-chart-completed">
            <ReactApexChart options={radialOptions} series={radialSeries} type="radialBar" />
        </div>
    );
};




export const RadialChartAllTypes = ({ records }) => {
    const [typePercentages, setTypePercentages] = useState([]);

    useEffect(() => {
        const allAssignmentTypes = ['Lab Assignment', 'General Assignment', 'Zoom Meeting', 'Quiz'];

        const typeCounts = allAssignmentTypes.map(type => {
            const count = records.filter(record => record.assignmentType === type).length;
            return count;
        });

        setTypePercentages(typeCounts);
    }, [records]);

    const radialOptions = {
        chart: {
            height: 390,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        labels: ['Lab Assignment', 'General Assignment', 'Zoom Meeting', 'Quiz'],
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetX: 160, // Offset from the left edge
            offsetY: 15,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function (seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 3
            }
        },

        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };

    return (
        <div id="radial-chart-all-types" className=' border border-red-900 w-[800px]'>
            <ReactApexChart options={radialOptions} series={typePercentages} type="radialBar" height={390} />
        </div>
    );
};






export const PolarAreaChart = ({ records }) => {
    const [hourCategories, setHourCategories] = useState([0, 0, 0, 0, 0]); // Initialize categories with zeros

    useEffect(() => {
        const now = new Date(); // Current date and time
        const categories = [0, 0, 0, 0, 0]; // Initialize categories with zeros

        records.forEach(record => {
            const dueDate = new Date(record.dateTimeDue);
            const hoursDifference = Math.floor((dueDate - now) / (1000 * 60 * 60)); // Difference in hours

            if (hoursDifference <= -1) {
                categories[0]++; // Increment count for category "Overdue"
            } else if (hoursDifference <= 12 && hoursDifference >= 0) {
                categories[1]++; // Increment count for category "Below 12 hours"
            } else if (hoursDifference <= 24 && hoursDifference > 12) {
                categories[2]++; // Increment count for category "Between 12 and 24 hours"
            } else if (hoursDifference <= 48 && hoursDifference > 24) {
                categories[3]++; // Increment count for category "Between 24 and 48 hours"
            } else if (hoursDifference > 48) {
                categories[4]++; // Increment count for category "Beyond 48 hours"
            }
        });

        setHourCategories(categories);
    }, [records]);

    const polarOptions = {
        chart: {
            width: 380,
            type: 'polarArea'
        },
        labels: ['Overdue', 'Below 12 hrs', '12-24 hrs', '24-48 hrs', 'Beyond 48 hrs'],
        fill: {
            opacity: 1,
            colors: ['#FF0000', '#1ab7ea', '#0084ff', '#39539E', '#0077B5'] // Custom colors for each category
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
                dataLabels: {
                    dropShadow: {
                        enabled: true,
                        blur: 5,
                        opacity: 0.8
                    },
                    value: {
                        formatter: function (val) {
                            return val;
                        },
                        offsetY: -10
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b;
                            }, 0)
                        }
                    }
                },
                extendRadius: true
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        }
    };

    return (
        <div id="polar-area-chart">
            <ReactApexChart options={polarOptions} series={hourCategories} type="polarArea" width={380} />
        </div>
    );
};


export const DonutChartPeriod = ({ records }) => {
    const [periodCategories, setPeriodCategories] = useState([0, 0, 0, 0, 0]); // Initialize categories with zeros

    useEffect(() => {
        const now = new Date(); // Current date and time
        const categories = [0, 0, 0, 0, 0]; // Initialize categories with zeros

        records.forEach(record => {
            const dueDate = new Date(record.dateTimeDue);
            const hoursDifference = Math.floor((dueDate - now) / (1000 * 60 * 60)); // Difference in hours

            if (hoursDifference <= -1) {
                categories[0]++; // Increment count for category "Overdue"
            } else if (hoursDifference <= 12 && hoursDifference >= 0) {
                categories[1]++; // Increment count for category "Below 12 hours"
            } else if (hoursDifference <= 24 && hoursDifference > 12) {
                categories[2]++; // Increment count for category "Between 12 and 24 hours"
            } else if (hoursDifference <= 48 && hoursDifference > 24) {
                categories[3]++; // Increment count for category "Between 24 and 48 hours"
            } else if (hoursDifference > 48) {
                categories[4]++; // Increment count for category "Beyond 48 hours"
            }
        });

        setPeriodCategories(categories);
    }, [records]);

    const donutOptions = {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    const donutSeries = periodCategories;
    const donutLabels = ['Overdue', 'Below 12 hrs', '12-24 hrs', '24-48 hrs', 'Beyond 48 hrs'];

    return (
        <div id="donut-chart-period">
            <ReactApexChart options={{ ...donutOptions, labels: donutLabels }} series={donutSeries} type="donut" />
        </div>
    );
};



export const GroupedColumnChart = ({ records }) => {
    const [groupedData, setGroupedData] = useState([]);
    const [xAxisCategories, setXAxisCategories] = useState([]);

    useEffect(() => {
        const uniqueUsers = Array.from(new Set(records.map(record => record.name))); // Get unique user names
        const categories = ['Overdue', 'Below 12 hrs', '12-24 hrs', '24-48 hrs', 'Beyond 48 hrs'];

        // Initialize an array to hold data for each category for each unique user
        const series = categories.map(() => ({
            name: '',
            data: new Array(uniqueUsers.length).fill(0)
        }));

        uniqueUsers.forEach((user, index) => {
            records.forEach(record => {
                if (record.name === user) {
                    const dueDate = new Date(record.dateTimeDue);
                    const now = new Date();
                    const hoursDifference = Math.floor((dueDate - now) / (1000 * 60 * 60));
                    let categoryIndex;
                    if (hoursDifference <= -1) {
                        categoryIndex = 0; // Overdue
                    } else if (hoursDifference <= 12 && hoursDifference >= 0) {
                        categoryIndex = 1; // Below 12 hours
                    } else if (hoursDifference <= 24 && hoursDifference > 12) {
                        categoryIndex = 2; // Between 12 and 24 hours
                    } else if (hoursDifference <= 48 && hoursDifference > 24) {
                        categoryIndex = 3; // Between 24 and 48 hours
                    } else if (hoursDifference > 48) {
                        categoryIndex = 4; // Beyond 48 hours
                    }
                    series[categoryIndex].data[index]++;
                    series[categoryIndex].name = categories[categoryIndex];
                }
            });
        });

        setXAxisCategories(uniqueUsers);
        setGroupedData(series);
    }, [records]);

    const options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        xaxis: {
            categories: xAxisCategories, // Set x-axis categories to unique user names
        },
        legend: {
            position: 'right',
            offsetY: 40,
            labels: {
                colors: ['#FF0000', '#FF6666', '#1ab7ea', '#0084ff', '#39539E'], // Set colors for legend items
                useSeriesColors: false // Disable using series colors for legend
            }
        },
        fill: {
            opacity: 1
        },
        yaxis: {
            labels: {
                colors: ['#FF0000', '#FF6666', '#1ab7ea', '#0084ff', '#39539E'], // Set colors for y-axis labels
            }
        }
    };

    return (
        <div id="grouped-column-chart">
            <ReactApexChart options={options} series={groupedData} type="bar" height={350} />
        </div>
    );
};
