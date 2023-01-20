import React from "react";
import { Card } from "antd";
import { BorderHorizontalOutlined, RiseOutlined } from "@ant-design/icons";

const CardWidgets = ({ title, amount, average, month }) => {
  return (
    <Card className="widgetCards">
      <div className="top-section">
        <p className="title">{title}</p>
        <BorderHorizontalOutlined />
      </div>
      <div className="bottom-section">
        <div className="amount">
          <h5 style={{ fontWeight: "bold" }}>{amount}</h5>
        </div>
        <div className="avarage">
          <p className="percentage">
            <span
              className="percentage-sign"
              style={{ marginRight: "7px", color: "green" }}
            >
              <RiseOutlined />
            </span>
            <span className="percentage-amount">{average}</span>
          </p>
          <p className="month">Compared to {month}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardWidgets;
