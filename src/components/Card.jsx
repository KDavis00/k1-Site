import React from "react";

export default function Card({ positionClass = "", children }) {
  const className = `card ${positionClass}`.trim();
  return <div className={className}>{children}</div>;
}
