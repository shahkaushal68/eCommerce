import React from "react";

const InputComponent = ({ type, label, name, value, onChange, onBlur }) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        className="form-control"
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputComponent;
