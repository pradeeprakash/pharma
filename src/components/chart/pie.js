import ReactApexCharts from 'react-apexcharts'
import React from 'react';

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Kolakkaranoor', 'Umareddiyur', 'Ammapetai', 'Nerinjipettai', 'Poolampatti'],
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
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexCharts options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>


      );
    }
  }

  export default ApexChart;