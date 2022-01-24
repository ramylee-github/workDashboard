'use strict';
charts();
quickMenu();


function quickMenu() {
    const quickMenu = document.querySelector('#quickMenu');

    quickMenu.addEventListener('mouseenter', function(e) {
        this.classList.add('quick-menu--opened');
    });
    
    quickMenu.addEventListener('mouseleave', function(e) {
        this.classList.remove('quick-menu--opened');
    });
}

function charts() {
    stackedBarChart('chart01');
    barLineChart('chart02');
    spiderChart('chart03');
    lineChart('chart04');

    stackedBarChart = (chartId) => {
        Highcharts.chart(chartId, {
            chart: {
                type: 'column',
                style: {
                    fontFamily:"oneshinhan"
                },
                margin: [20,10, 25, 60]
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '7월',
                    '8월',
                    '9월'
                ],
                lineColor:'#d7d7d7',
                endOnTick: true,
                startOnTick: true,
                tickColor:'#d7d7d7',
                tickWidth: 1,
                labels: {
                    style: {
                    color:'#888',
                    fontSize:'12px'
                    }
                }
            },
            yAxis: [{
                min: 0,
                title: {
                    text: '',
                    style: {
                        color:'#aaa',
                        fontSize:'12px',
                    }
                },
                labels: {
                    style: {
                    color:'#aaa',
                    fontSize:'10px',
                    }
                },
                gridLineColor:'#f1f1f1'
            }, {
                title: {
                    text: ''
                },
                opposite: true
            }],
            legend: {
                enabled: false
            },
            tooltip: {
                shared: true
            },
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0,
                    
                }
            },
            exporting: {
                enabled:false
                },
            series: [{
                name: '목표',
                color: '#e3dffb',
                data: [150, 73, 20],
                pointWidth:37
            }, {
                name: '발생',
                    color: '#715deb',
                data: [140, 90, 40],
                pointWidth:21
            }]
        });
    }
    barLineChart = (chartId) => {
        Highcharts.chart(chartId, {
            chart: {
                type: 'column',
                style: {
                    fontFamily:"oneshinhan"
                },
                margin: [20, 30, 25, 60]
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '7월',
                    '8월',
                    '9월'
                ],
                lineColor:'#d7d7d7',
                endOnTick: true,
                startOnTick: true,
                tickColor:'#d7d7d7',
                tickWidth: 1,
                labels: {
                    style: {
                    color:'#888',
                    fontSize:'12px'
                    }
                }
            },
            yAxis: [{
                min: 0,
                title: {
                    text: '',
                    style: {
                        color:'#aaa',
                        fontSize:'12px',
                    }
                },
                labels: {
                    style: {
                    color:'#aaa',
                    fontSize:'10px',
                    }
                },
                gridLineColor:'#f1f1f1'
            }, {
                title: {
                    text: ''
                },
                labels: {
                        style: {
                        color:'#aaa',
                        fontSize:'10px',
                        }
                },
                max: 5,    
                opposite: true
            }],
            legend: {
                enabled: false
            },
            tooltip: {
                shared: true
            },
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0,
                    
                }
            },
            exporting: {
                enabled:false
                },
            series: [{
                name: '평균처리일수',
                    color: '#715deb',
                data: [820, 1200, 450],
                pointWidth:25,
                tooltip: {
                    valueSuffix: '일'
                }
            },{
                name: '접수건수',
                type: 'spline',
                color: '#00bdb7',
                data: [1, 2, 5],
                tooltip: {
                    valueSuffix: '건'
                },
                yAxis: 1
            }]
        });
    }
    spiderChart = (chartId) => {
        Highcharts.chart(chartId, {
            chart: {
                    polar: true,
                style: {
                    fontFamily:"oneshinhan"
                },
            },
            title: {
                text: ''
            },
            pane: {
                size: '80%'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '모집',
                    '유지',
                    '재지급',
                    '보험금',
                    '서비스 기타',
                ],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                labels: {
                    style: {
                    color:'#666',
                    fontSize:'13px'
                    }
                }
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0,
                labels: {
                        enabled:false
                    }
                
            },
            legend: {
                enabled: false
            },
            tooltip: {
                shared: true
            },
            exporting: {
                enabled:false
                },
                plotOptions: {
                    area: {
                        fillOpacity: 0.15
                    }
                },
            series: [{
                name: '발생현황',
                    type: 'area',
                    color: '#715deb',
                data: [120, 200, 50,90,156 ],
                tooltip: {
                    valueSuffix: '건'
                },
                pointPlacement: 'on'
            }],
        });
    }
    lineChart = (chartId) => {
        Highcharts.chart(chartId, {
            chart: {
                style: {
                    fontFamily:"oneshinhan"
                },
                plotBackgroundColor:'#f9f9f9',
                margin: [0, 1, 30, 1]
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['6월', '7월', '8월', '9월'],
                lineColor:'#e3e3e3',
                tickWidth: 0,
                labels: {
                    rotation: 0,
                    style: {
                    color:'#919191',
                    fontSize:'11px'
                    }
                },
            },
            yAxis: {
                    title: {
                        text: ''
                },
                max:20,
                min:0,
                    lineColor:'#e3e3e3',
                    lineWidth:1,
                gridLineWidth: 1,
                minorTickInterval: 7,
                minorTickLength: 0,
                labels: {
                        enabled: false
                },
            },
            legend: {enabled: false},
            tooltip: {
                formatter: function () {
                        return this.series.name + ':' + this.y + '건';
                },
                padding:13,
                style: {
                    color:'#444',
                    fontSize:'11px'                	
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        style: {
                                color:'#444',
                                fontSize:'11px',
                                fontWeight:'bold',
                            }
                        }
                    
                }
            },
            exporting: {
                enabled:false
                },
                series: [{
                    name: '최근 4개월',
                    color: '#9e92ed',
                    data: [3, 12, 5, 5],
                    marker: {
                        symbol: 'url(../../../page/images/main/ico_symbol_graph.png)'
                    }
                    }]
        });
    }
}

