import React from "react";
import CardWidgets from "../components/CardWidgets";
import ChartComponent from "../components/ChartComponent";
import RecentOrder from "../components/RecentOrder";
import "../style/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="cardWidgets-section">
        <CardWidgets
          title="Total Sells"
          amount="$4599.00"
          average="34.7%"
          month="April 2023"
        />
        <CardWidgets
          title="Avarage Order Values"
          amount="$272.98"
          average="12.0%"
          month="April 2023"
        />
        <CardWidgets
          title="Total Orders"
          amount="578"
          average="27.9%"
          month="April 2023"
        />
      </div>
      <div className="chart-section">
        <h3>Income Statics</h3>
        <ChartComponent />
      </div>
      <div className="recent-order-section">
        <h3>Recent Orders</h3>
        <RecentOrder />
      </div>
    </>
  );
};

export default Dashboard;
