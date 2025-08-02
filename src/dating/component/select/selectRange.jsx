import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SelectRange = () => {
  const [selectedDistance, setSelectedDistance] = useState(50);

  const handleDistanceChange = (e) => {
    setSelectedDistance(e.target.value);
  };

  return (
    <>
      <div className="banner__list">
        <label>{`Distance (${selectedDistance} km)`}</label>
        <div className="row">
          <div className="col-12">
            <Form.Range
              className="custom-range"
              value={selectedDistance}
              onChange={handleDistanceChange}
              min={1}
              max={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectRange;
