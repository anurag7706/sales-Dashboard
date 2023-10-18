import React from 'react'
import MonthlySalesChart from '../MonthlySalesChart/MonthlySalesChart'
import CustomersChart from '../CustomersChart/CustomersChart'
import CardSimple from '../CardSimple/CardSimple'
import ProductTable from '../ProductTable/ProductTable'

const MainPage = () => {
  return (
    <>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <CardSimple 
            heading="Earnings"
            amount="$198K"
            profits="↑ 37.8% this month"
            imageSrc="src/assets/transfer-money.png"
          /> 
          <CardSimple 
            heading="Orders"
            amount="$2.4K"
            profits="↓ 2% this month"
            imageSrc="src/assets/orders.png"
          />
          <CardSimple 
            heading="Balance"
            amount="$2.4K"
            profits="↓ 2% this month"
            imageSrc="src/assets/balance.png"
          /> 
          <CardSimple 
            heading="Total Sales"
            amount="$89K"
            profits="↑ 11% this week"
            imageSrc="src/assets/TotalSales.png"
          />
        </div>
        <br />
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <MonthlySalesChart />
            <CustomersChart />
        </div>
        <br />
        <ProductTable />
    </>
  )
}

export default MainPage