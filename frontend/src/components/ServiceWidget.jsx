import React from "react";

const ServiceWidget = ({ icon, title, text }) => {
  return (
    <div className="different-services">
      <div className="service-icon">{icon}</div>
      <div className="service-name">
        <p className="service-title">{title}</p>
        <p className="service-desc">{text}</p>
      </div>
    </div>
  );
};

export default ServiceWidget;
