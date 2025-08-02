import React from "react";

const SelectMode = ({ select }) => {
  return (
    <select defaultValue={select}>
      <option value="Dating">Dating</option>
      <option value="Matrimonial">Matrimonial</option>
    </select>
  );
};

export default SelectMode;
