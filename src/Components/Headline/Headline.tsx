import React from "react";
import "./styles.scss";
type Props = {
  name: string;
  value: string;
};
const Headline = ({ name, value }: Props) => {
  return <h2 className={name}>{value}</h2>;
};

export default Headline;
