import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ArrowIcon from "../../assets/icon-arrow.svg";
import "./styles.scss";
import { NULL } from "sass";
let storageItems = localStorage.getItem("Birthday")
  ? JSON.parse(localStorage.getItem("Birthday") || "")
  : { day: null, month: null, year: null };
console.log(storageItems);
type Props = {
  onRemove: (livedDays: number, livedYear: number, livedMonths: number) => void;
};
let first = true;
const date = new Date();
const today = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Date_wrapper = ({ onRemove }: Props) => {
  const [inputToday, setToday] = useState(storageItems.day);
  const [inputMonth, setMonth] = useState(storageItems.month);
  const [inputYear, setYear] = useState(storageItems.year);
  const [livedDays, setLivedDays] = useState(0);
  const [livedMonth, setLivedMonths] = useState(0);
  const [livedYears, setLivedYears] = useState(0);
  const [errorDD, setErrorDD] = useState(0);
  const [errorMM, setErrorMM] = useState(0);
  const [errorYYYY, setErrorYYYY] = useState(0);
  const [error, setError] = useState(false);

  const inputErrorStyle = {
    border: "1px solid red",
  };
  const inputWithoutErrorStyle = {
    border: "1px solid black",
  };

  useEffect(() => {
    if (!error) {
      let birthday = { day: inputToday, month: inputMonth, year: inputYear };
      localStorage.setItem("Birthday", JSON.stringify(birthday));
      if (storageItems.day != null) {
        calculate();
      }
    }
  }, [livedDays, livedMonth, livedYears]);
  useEffect(() => {
    onRemove(livedDays, livedMonth, livedYears);
  }, [livedDays]);
  useEffect(() => {}, [error]);
  let calculate = () => {
    setErrorDD(0);
    setErrorMM(0);
    setErrorYYYY(0);
    if (inputToday.length == 1) {
      setToday(0 + inputToday);
    }
    if (inputMonth.length == 1) {
      setMonth(0 + inputMonth);
    }
    if (
      inputToday == "" ||
      inputToday == null ||
      inputMonth == "" ||
      inputMonth == null ||
      inputYear == "" ||
      inputYear == null
    ) {
      setLivedDays(0);
      setLivedMonths(0);
      setLivedYears(0);
      setError(true);
      if (inputToday == "" || inputToday == null) {
        setErrorDD(1);
      }
      if (inputMonth == "" || inputMonth == null) {
        setErrorMM(1);
      }
      if (inputYear == "" || inputYear == null) {
        setErrorYYYY(1);
      }
    } else if (
      1 > inputToday ||
      inputToday > monthLength[month - 1] ||
      inputToday.length > 2 ||
      1 > inputMonth ||
      inputMonth > 12 ||
      inputMonth.length > 2 ||
      0 > inputYear ||
      inputYear > year
    ) {
      setLivedDays(0);
      setLivedMonths(0);
      setLivedYears(0);
      setError(true);
      if (
        1 > inputToday ||
        inputToday > monthLength[month - 1] ||
        inputToday.length > 2
      ) {
        setErrorDD(2);
      }
      if (1 > inputMonth || inputMonth > 12 || inputMonth.length > 2) {
        setErrorMM(2);
      }
      if (0 > inputYear || inputYear > year) {
        setErrorYYYY(2);
      }
    } else {
      setError(false);
      if (
        month > inputMonth! ||
        (inputToday! >= today && month == inputMonth)
      ) {
        setLivedYears(year - inputYear!);
        if (today >= inputToday!) {
          setLivedDays(today - inputToday!);
          setLivedMonths(month - inputMonth!);
        } else {
          setLivedDays(monthLength[month - 1] - inputToday! + today + 1);
          setLivedMonths(month - inputMonth! - 1);
        }
      } else {
        setLivedYears(year - inputYear! - 1);
        setLivedMonths(12 - inputToday! + month);
        if (today >= inputToday!) {
          setLivedDays(today - inputToday!);
        } else {
          setLivedDays(monthLength[month - 1] - inputToday! + today + 1);
          setLivedMonths(12 - inputMonth! + month - 1);
        }
      }
    }
  };
  return (
    <div className="header">
      <div className="date_wrapper">
        <div className="input_wrapper">
          <h4
            className="names"
            style={error ? { color: "red" } : { color: "grey" }}
          >
            DAY
          </h4>
          <Input
            placeholder="DD"
            id="inputWrapperDay"
            value={inputToday!}
            handleInput={(event) => setToday(event.target.value)}
            maxNum={99}
            style={error == true ? inputErrorStyle : inputWithoutErrorStyle}
          />
          <div className="boxError">
            {error == true && errorDD == 1
              ? "This field is required"
              : errorDD == 2 && error == true
              ? "Must be a valid Day"
              : ""}
          </div>
        </div>
        <div className="input_wrapper">
          <h4
            style={error ? { color: "red" } : { color: "grey" }}
            className="names"
          >
            MONTH
          </h4>
          <Input
            placeholder="MM"
            id="inputWrapperMonth"
            value={inputMonth!}
            handleInput={(event) => setMonth(event.target.value)}
            maxNum={99}
            style={error == true ? inputErrorStyle : inputWithoutErrorStyle}
          />
          <div className="boxError">
            {error == true && errorMM == 1
              ? "This field is required"
              : errorMM == 2 && error == true
              ? "Must be a valid Month"
              : ""}
          </div>
        </div>
        <div className="input_wrapper">
          <h4
            style={error ? { color: "red" } : { color: "grey" }}
            className="names"
          >
            YEAR
          </h4>
          <Input
            placeholder="YYYY"
            id="inputWrapperYear"
            value={inputYear!}
            handleInput={(event) => setYear(event.target.value)}
            maxNum={9999}
            style={error == true ? inputErrorStyle : inputWithoutErrorStyle}
          />
          <div className="boxError">
            {error == true && errorYYYY == 1
              ? "This field is required"
              : errorYYYY == 2 && error == true
              ? "Must be in the past"
              : ""}
          </div>
        </div>
      </div>
      <div className="submit_btn">
        <hr />
        <Button
          name="backgroundIcon"
          value={<img src={ArrowIcon} />}
          calculate={calculate}
        />
      </div>
    </div>
  );
};

export default Date_wrapper;
