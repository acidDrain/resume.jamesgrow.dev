import React from "react";

function getYearMonthDay(d) {
  if (d < 0) return "Present";
  const ds = new Date(Number(d));
  return ds.getMonth() < 10
    ? `${ds.getFullYear()}-0${ds.getMonth() + 1}`
    : `${ds.getFullYear()}-${ds.getMonth() + 1}`;
}

const Position = ({ title, description, location, startDate, endDate }) => (
  <div className="work-history-position">
    <div className="work-history-position-title">
      <h4>{title}</h4>
    </div>
    <div className="work-history-dates">
      {getYearMonthDay(startDate)} - {getYearMonthDay(endDate)}
    </div>
    <div className="work-history-location">{location}</div>
    <div className="work-history-description">{description}</div>
  </div>
);

const PositionList = ({ positionList }) => (
  <ul>
    {positionList.map(p => (
      <Position
        key={p.endDate}
        title={p.title}
        location={p.location}
        startDate={p.startDate}
        endDate={p.endDate}
        description={p.description}
      />
    ))}
  </ul>
);

export default ({ company, positions }) => (
  <div className="work-history-record">
    <div className="work-history-company">
      <h3>{company}</h3>
    </div>
    <PositionList positionList={positions} />
  </div>
);

// positions [{startDate, endDate, title, description, location}]
