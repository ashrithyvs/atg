import React from "react";
import Group from "./Group";
import groupIcon1 from "./gi1.png";
import groupIcon2 from "./gi2.png";
import groupIcon3 from "./gi3.png";
import groupIcon4 from "./gi4.png";

function Groups() {
  const GroupList = [
    { name: "Leisure", src: groupIcon1 },
    { name: "Activism", src: groupIcon2 },
    { name: "MBA", src: groupIcon3 },
    { name: "Philosophy", src: groupIcon4 },
  ];
  return (
    <div className="text-center" style={{ margin: "5rem 0" }}>
      <div>
        <i class="far fa-thumbs-up mx-2"></i>
        <span>Recomended Groups</span>
      </div>
      <div className="mx-4">
        {GroupList.map((group) => {
          return <Group name={group.name} imgSrc={group.src} />;
        })}
      </div>
      <a href="#seemore">
        <small>See More...</small>
      </a>
    </div>
  );
}

export default Groups;
