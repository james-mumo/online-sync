import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

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
        <div id="pie-chart-type" className='border bg-emerald-100 rounded-md flex flex-col' style={{ width: 450, height: 350 }}>
            <ReactApexChart options={{ ...pieOptions }} series={pieSeries} type="pie" />
            <span className=' font-semibold ml-4'>Summary</span>
            <hr />
            <div className="flex flex-row gap-5 flex-1">
                <div className="flex flex-col gap-2 flex-1 px-4">
                    <span className=' flex justify-between'>
                        <span className='font-thin'>{typeData[0]?.type}</span><span className='font-semibold'>{typeData[0]?.count}</span>
                    </span>
                    <span className=' flex justify-between'>
                        <span className='font-thin'>{typeData[1]?.type}</span><span className='font-semibold'>{typeData[1]?.count}</span>
                    </span>
                </div>
                <div className="flex flex-col gap-2 flex-1 px-4">
                    <span className=' flex justify-between'>
                        <span className='font-thin'>{typeData[2]?.type}</span><span className='font-semibold'>{typeData[2]?.count}</span>
                    </span>
                    <span className=' flex justify-between'>
                        <span className='font-thin'>{typeData[3]?.type}</span><span className='font-semibold'>{typeData[3]?.count}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};


export const MixedChart = ({ records }) => {
    const allAssignmentTypes = ['Lab Assignment', 'General Assignment', 'Zoom Meeting', 'Quiz'];

    const [chartData, setChartData] = useState([]);
    const [seriesData, setSeriesData] = useState([]);

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
        setSeriesData([{ data: chartDataWithAll.map(item => item.count) }]);
    }, [records]);

    const chartOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: chartData.map(item => item.type)
        }
    };

    return (
        <div id="chart" className='border bg-emerald-100 rounded-md flex flex-col pr-5' style={{ width: 450, height: 350 }}>
            <ReactApexChart options={chartOptions} series={seriesData} type="bar" height={350} />
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
                    background: '#00bfff',
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
        labels: ['Lab Assignments', 'Gen Assignments', 'Zoom Meetings', 'Quiz'],
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetX: 0,
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
        <div id="radial-chart-all-types" className='border bg-emerald-100 rounded-md flex flex-col pr-5' style={{ width: 450, height: 350 }}>
            <ReactApexChart options={radialOptions} series={typePercentages} type="radialBar" height={390} />
        </div>
    );
};

// second one

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
            height: 300,
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
                },
                // colors: ['#808080', '#FF0000', '#FFFF00', '#1E90FF', '#0000FF'], // Set colors for bars

            },
        },
        xaxis: {
            categories: xAxisCategories, // Set x-axis categories to unique user names
        },
        legend: {
            position: 'right',
            offsetY: 40,
            labels: {
                colors: ['#808080', '#FF0000', '#FFFF00', '#1E90FF', '#0000FF'], // Set colors for legend items
                useSeriesColors: false // Disable using series colors for legend
            }
        },
        fill: {
            opacity: 1
        },
        yaxis: {
            labels: {
                colors: ['#808080', '#FF0000', '#FFFF00', '#1E90FF', '#0000FF'], // Set colors for legend items
            },
            forceNiceScale: true // Ensure y-axis labels are rounded to the nearest whole number
        }
    };


    return (
        <div id="grouped-column-chart" className='border bg-emerald-100 rounded-md flex flex-col pr-5' style={{ width: 450, height: 300 }}>
            <ReactApexChart options={options} series={groupedData} type="bar" height={300} />
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
            width: 500, // Increase the width
            height: 300, // Increase the height
        },
        colors: ['#808080', '#FF0000', '#ff5400', '#008eff', '#00e971'], // Specify colors for each category

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
        <div id="donut-chart-period" className='border bg-emerald-100 rounded-md flex flex-col pr-5' style={{ width: 450, height: 300 }}>
            <ReactApexChart options={{ ...donutOptions, labels: donutLabels }} series={donutSeries} type="donut" />
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
        }],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true, // Show values on the legend
                        formatter: function (val, opts) {
                            return `${opts.w.globals.labels[opts.seriesIndex]}: ${opts.series[opts.seriesIndex]}`;
                        }
                    }
                }
            }
        }
    };

    const donutSeries = statusData.map(item => item.count);
    const donutLabels = statusData.map(item => item.status);

    return (
        <div id="donut-chart-status" className='border bg-emerald-100 rounded-md flex flex-col pr-5' style={{ width: 450, height: 300 }}>
            <ReactApexChart options={{ ...donutOptions, labels: donutLabels }} series={donutSeries} type="donut" />
        </div>
    );
};


export const RadialChartPending = ({ records }) => {
    const [pendingPercentage, setPendingPercentage] = useState(0);

    const [myPendingCount, setMyPendingCount] = useState(0);
    const [totalMyCount, setMyTotalCount] = useState(0);

    useEffect(() => {
        const pendingCount = records.filter(record => record.status === 'Pending').length;
        const totalCount = records.length;
        const percentage = Math.round((pendingCount / totalCount) * 100);
        setPendingPercentage(percentage);
        setMyPendingCount(pendingCount)
        setMyTotalCount(totalCount)
    }, [records]);

    const radialOptions = {
        chart: {
            type: 'radialBar',
            offsetY: -30,
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

        tooltip: {
            y: {
                formatter: function (val) {
                    return `${myPendingCount} out of ${totalMyCount}`;
                }
            }
        },
        labels: ['Pending Assignments'],
    };

    const formattedPercentage = `${pendingPercentage}`;
    const radialSeries = [formattedPercentage];

    return (
        // <div id="radial-chart-pending" className='flex flex-col'>
        <ReactApexChart options={radialOptions} series={radialSeries} type="radialBar" />

        // </div>
    );
};



export const RadialChartCompleted = ({ records }) => {
    const [completedPercentage, setCompletedPercentage] = useState(0);

    useEffect(() => {
        const completedCount = records.filter(record => record.status === 'Completed').length;
        const totalCount = records.length;
        const percentage = Math.round((completedCount / totalCount) * 100);
        setCompletedPercentage(percentage);
    }, [records]);

    const radialOptions = {
        chart: {
            type: 'radialBar',
            offsetY: -30,
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




