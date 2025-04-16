import React, { useEffect, useState } from "react";
import Headline from "../Headline/Headline";
import "./styles.scss";

type Props = {
  name: string;

  livedDays: number;
  livedMonth: number;
  livedYears: number;
};
const Output = ({ name, livedDays, livedMonth, livedYears }: Props) => {
  const [displayDays, setDays] = useState("");
  const [displayMonth, setMonths] = useState("");
  const [displayYears, setYears] = useState("");
  useEffect(() => {
    if (livedDays == 0 || livedDays == null) {
      setDays("--");
      setMonths("--");
      setYears("--");
    } else {
      setDays(String(livedDays));
      setMonths(String(livedMonth));
      setYears(String(livedYears));
    }
  });

  return (
    <div className={name}>
      <div className="outputLine">
        <Headline name="outputText" value={displayYears} />
        <h3>years</h3>
      </div>
      <div className="outputLine">
        <Headline name="outputText" value={displayMonth} />
        <h3>months</h3>
      </div>
      <div className="outputLine">
        <Headline name="outputText" value={displayDays} />
        <h3>days</h3>
      </div>
    </div>
  );
};

export default Output;
