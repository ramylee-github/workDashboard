'use strict';

const { blue } = require("gulp-cli/lib/shared/ansi");

window.onload = () => {
    charts();
    // quickMenu();
    tabs();
    tabsRadioButton();
}

function tabs() {
    let tabMenu = document.querySelectorAll('.tab__menu');

    const tabClick = (e) => {
        let tabSelectorSelected = e.target;
        let tabContainer = tabSelectorSelected.closest('.tab');
        let tabs = tabContainer.querySelectorAll('.tab__menu');
        let tabsCont = tabContainer.querySelectorAll('.tab__cont');

        if(!tabSelectorSelected.classList.contains('active')) {
            tabs.forEach((tabSelected, i) => {
                if(tabSelectorSelected.getAttribute('data-id') === tabsCont[i].getAttribute('data-id')) {
                    tabSelected.classList.add('active');
                    tabsCont[i].classList.add('active');
                } else {
                    tabSelected.classList.remove('active');
                    tabsCont[i].classList.remove('active');
                }
            });
        }
    }

   tabMenu.forEach((tabMenu) => {
    tabMenu.addEventListener('click', event => tabClick(event));
   });
}
function tabsRadioButton() {
    let tabMenu = document.querySelectorAll('.tab-type-radio .tab__menu');

    const tabClick = (e) => {
        let tabSelectorSelected = e.target;
        let tabContainer = tabSelectorSelected.closest('.tab-type-radio');
        let tabs = tabContainer.querySelectorAll('.tab-type-radio .tab__menu');
        let tabsCont = tabContainer.querySelectorAll('.tab-type-radio .tab__cont');

        if(!tabSelectorSelected.classList.contains('active')) {
            tabs.forEach((tabSelected, i) => {
                if(tabSelectorSelected.getAttribute('data-id') === tabsCont[i].getAttribute('data-id')) {
                    tabSelected.classList.add('active');
                    tabsCont[i].classList.add('active');
                    tabSelected.previousElementSibling.setAttribute('checked', '');
                    tabSelected.previousElementSibling.checked = true;
                } else {
                    tabSelected.classList.remove('active');
                    tabsCont[i].classList.remove('active');
                    tabSelected.previousElementSibling.removeAttribute('checked');
                    tabSelected.previousElementSibling.checked = false;
                }
            });
        }
    }

   tabMenu.forEach((tabMenu) => {
    tabMenu.addEventListener('click', event => tabClick(event));
   });
}
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

    function stackedBarChart(chartId) {
        Highcharts.chart(chartId, {
            chart: {
                type: 'column',
                style: {
                    fontFamily:"SUIT"
                },
                margin: [20, 10, 25, 66]
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '7???',
                    '8???',
                    '9???'
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
                gridLineColor:'#f1f1f1',
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
                name: '??????',
                color: '#e3dffb',
                data: [150, 73, 20],
                pointWidth:37
            }, {
                name: '??????',
                    color: '#715deb',
                data: [140, 90, 40],
                pointWidth:21
            }]
        });
    }
    function barLineChart (chartId) {
        Highcharts.setOptions({
            colors: ['#5fa0ff', '#6383ff', '#715deb']
        });

        Highcharts.chart(chartId, {
            chart: {
                type: 'column',
                style: {
                    fontFamily:"SUIT"
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
                    '7???',
                    '8???',
                    '9???'
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
                max: 1200,
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
                gridLineWidth:0,
                tickPositions: [0, 400, 800, 1200],
            }, {
                min: 0,
                max: 5,  
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color:'#aaa',
                        fontSize:'10px',
                    }
                },
                opposite: true,
                tickPositions: [0, 1, 2, 3, 4, 5],
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
                name: '??????????????????',
                    color: '#715deb',
                data: [820, 1200, 450],
                colorByPoint: true,
                pointWidth:25,
                tooltip: {
                    valueSuffix: '???'
                }
            },{
                name: '????????????',
                type: 'spline',
                color: '#00bdb7',
                data: [3.2, 3.8, 3],
                tooltip: {
                    valueSuffix: '???'
                },
                yAxis: 1
            }]
        });
    }
    function spiderChart (chartId) {
        Highcharts.chart(chartId, {
            chart: {
                polar: true,  
                type: 'line',
                style: {
                    fontFamily:"SUIT"
                },
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '??????',
                    '??????',
                    '?????????',
                    '?????????',
                    '????????? ??????',
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
                name: '????????????',
                    type: 'area',
                    color: '#715deb',
                data: [120, 200, 100, 200, 356 ],
                tooltip: {
                    valueSuffix: '???'
                },
                pointPlacement: 'on'
            },
            {
                name: '????????????',
                    type: 'area',
                    color: '#16bb8c',
                data: [230, 100, 250, 400, 259 ],
                tooltip: {
                    valueSuffix: '???'
                },
                pointPlacement: 'on'
            }],
            
        });
    }
    function lineChart (chartId) {
        Highcharts.chart(chartId, {
            chart: {
                style: {
                    fontFamily:"SUIT"
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
                categories: ['6???', '7???', '8???', '9???'],
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
                labels: {
                        enabled: false
                },
            },
            legend: {enabled: false},
            tooltip: {
                formatter: function () {
                        return this.series.name + ':' + this.y + '???';
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
                    name: '?????? 4??????',
                    color: '#9e92ed',
                    data: [3, 12, 5, 5],
                    marker: {
                        symbol: 'url(img/ico_symbol_graph.png)'
                    }
                    }]
        });
    }
}

