import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

class CustomersChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Old Customers', 'New Customers'],
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            size: 100,
          },
          donut: {
            size: '200',
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true,
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
              }
            }
          },
        },
      },
      series: [35, 65],
    };
  }

  render() {
    return (
      <Card className="customers-card">
        <CardContent>
          <Typography variant="h6" component="div">
            Customers
          </Typography>
          <Typography variant="subtitle1" component="div">
            Customers that buy products
          </Typography>
          <div style={{padding: "20px", marginTop: "20px"}}>
            <Chart options={this.state.options} series={this.state.series} type="donut" width="350" height="600" />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default CustomersChart;
