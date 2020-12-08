import React from "react";
import "./Input.css";

const Input = ({
  error,
  disabled,
  helperText,
  value,
  size,
  fullWidth,
  multiline,
  row,
  startIcon,
  endIcon
}) => {
  const result = disabled ? (
    <input
      className={`${disabled && "disabled"} ${size} ${
        fullWidth && "fullWidth"
      }`}
      type="text"
      value={value}
      disabled
      placeholder="Placeholder"
    />
  ) : multiline ? (
    <textarea name="text" placeholder="Placeholder" rows={row}></textarea>
  ) : (
    <input
      className={`${error && "error"} ${size} ${fullWidth && "fullWidth"}`}
      type="text"
      value={value}
      placeholder="Placeholder"
      style={startIcon && {border:'none'}}
    />
  );

  return (
    <div className={`input-container ${fullWidth && "fullWidth"}`}>
      <label className={`${error && "errorL"}`}>Label</label>
      <div className={`input-icons`} style={startIcon && {border:'1px solid #828282'}}>
        {startIcon && <span class="material-icons icon"> {startIcon} </span>}
        {result}
        {endIcon && <span class="material-icons icon"> {endIcon} </span>}
      </div>
      {helperText && <small className="helperText"> {helperText} </small>}
    </div>
  );
};

export default Input;
