import historicalData from "./data2023to2003.json";
import { dataCalc } from './dataCalcs.js';
import { dateToDayInteger } from './dateConv.js'
import { datesToChartObj } from './datesToChartObj.js'

var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

let lumpedData = dataCalc(historicalData)

// converting 2023-XX-XX to a day value (0-6)
lumpedData.forEach(array => {
  array[0] = dateToDayInteger(array[0])
})

//creating a chart object from the array
let chartObject = datesToChartObj(lumpedData);

  document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Rate of Change by Day of Week'
      },
      subtitle: {
          text: 'Source: twelvedata 2003 - 2023 data'
      },
      xAxis: {
          categories: [
              'Mon',
              'Tues',
              'Wends',
              'Thurs',
              'Fri'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Rate of change ($ per day)'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>${point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: 'S&P 500 (GSPC)',
          data: [chartObject['0'], chartObject['1'], chartObject['2'], chartObject['3'], chartObject['4']]
  
      }]
  })
});