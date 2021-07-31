import React from "react";
import Groups from "./Groups/Groups";
import Location from "./Location";
import "./GroupSection.css";

function GroupSection() {
  return (
    <section className="group-section">
      <Location />
      <Groups />
    </section>
  );
}

export default GroupSection;
