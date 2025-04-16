import React from "react";

type Props = {
  name: string;
  value: any;
  calculate?: () => void;
};

const Button = ({ name, value, calculate }: Props) => {
  return (
    <button className={name} onClick={calculate}>
      {value}
    </button>
  );
};

export default Button;
