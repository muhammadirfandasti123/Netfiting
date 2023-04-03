import React from "react";
import Select from "react-select";

export default function DropdownSelect({ handleChange, options, name }) {
  return (
    <select name={name} onChange={handleChange} className="w-100 mt-1 select-dropdown">
      {options?.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  );
}
