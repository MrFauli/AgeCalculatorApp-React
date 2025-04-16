import React from "react";

type Props = {
  placeholder: string;
  id: string;
  maxNum: number;
  value?: number;
  handleInput?: (event: any) => void;
  style?: any;
};
const Input = ({
  placeholder,
  id,
  maxNum,
  value,
  handleInput,
  style,
}: Props) => {
  return (
    <input
      type="number"
      id={id}
      placeholder={placeholder}
      max={maxNum}
      value={value}
      onChange={handleInput}
      style={style}
    />
  );
};

export default Input;
