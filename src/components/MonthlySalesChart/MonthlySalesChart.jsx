import React, { Component } from "react";
import Chart from "react-apexcharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

class MonthlySalesChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        chart: {
          id: "monthly-sales-bar"
        },
        xaxis: {
          categories: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ]
        },
        yaxis: {
          labels: {
            show: false,
          }
        }
      },
      series: [
        {
          name: "Monthly Sales",
          data: [1500, 1700, 1900, 2200, 2500, 2800, 3200, 3600, 4000, 4200, 3800, 3500],
        }
      ]
    };
  }

  render() {
    return (
      <Card style={{padding: '20px'}}>
        <CardContent>
          <Typography variant="h6" component="div">
            Overview
          </Typography>
          <Typography variant="subtitle1" component="div">
            Monthly Earning
          </Typography>
          <div className="bar-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="800"
              height="300"
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default MonthlySalesChart;
