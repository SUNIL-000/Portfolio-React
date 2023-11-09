import React from "react";

const SkillComponent = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((items) => {
        return (
          <span className="col-md-3">
            <img src={items.src} alt="" />
          </span>
        );
      })}
    </>
  );
};

export default SkillComponent;
