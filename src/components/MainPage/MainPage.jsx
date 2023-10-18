import React from 'react';
import MonthlySalesChart from '../MonthlySalesChart/MonthlySalesChart';
import CustomersChart from '../CustomersChart/CustomersChart';
import CardSimple from '../CardSimple/CardSimple';
import ProductTable from '../ProductTable/ProductTable';
import transferMoneyImage from '../../assets/transfer-money.png';
import ordersImage from '../../assets/orders.png';
import balanceImage from '../../assets/balance.png';
import totalSalesImage from '../../assets/TotalSales.png';

const MainPage = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <CardSimple
          heading="Earnings"
          amount="$198K"
          profits="↑ 37.8% this month"
          imageSrc={transferMoneyImage}
        />
        <CardSimple
          heading="Orders"
          amount="$2.4K"
          profits="↓ 2% this month"
          imageSrc={ordersImage}
        />
        <CardSimple
          heading="Balance"
          amount="$2.4K"
          profits="↓ 2% this month"
          imageSrc={balanceImage}
        />
        <CardSimple
          heading="Total Sales"
          amount="$89K"
          profits="↑ 11% this week"
          imageSrc={totalSalesImage}
        />
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <MonthlySalesChart />
        <CustomersChart />
      </div>
      <br />
      <ProductTable />
    </>
  );
};

export default MainPage;
