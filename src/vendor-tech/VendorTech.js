import React from "react";

import "./VendorTech.css";

export default ({ vendorTech }) => (
  <div className="vendor-tech">
    <div className="vendor-tech-title">
      <h2>Vendor Technology Experience</h2>
    </div>
    {vendorTech.map(i => (
      <div className="vendor-tech-list" key={i.vendor}>
        <li className="vendor-name">{i.vendor}</li>
        <ul>
          {i.products.map(product => {
            return product ? <li key={product}>{product}</li> : null;
          })}
        </ul>
      </div>
    ))}
  </div>
);
