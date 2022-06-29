import TextField from "@mui/material/TextField";
import React from "react";
const ExpireDate = ({
  error,
  errorText,
  dateValidate,
  dateValue,
  setDateValue,
}) => {
  const dateFormatter = (e) => {
    let formattedDate = e.target.value.split(" ").join("");
    if (formattedDate.length > 0) {
      formattedDate = formattedDate
        .replace(
          /[^0-9]/g,
          "" // To allow only numbers
        )
        .replace(
          /^([2-9])$/g,
          "0$1" // To handle 3 > 03
        )
        .replace(
          /^(1{1})([3-9]{1})$/g,
          "0$1/$2" // 13 > 01/3
        )
        .replace(
          /^0{1,}/g,
          "0" // To handle 00 > 0
        )
        .replace(
          /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
          "$1/$2" // To handle 113 > 11/3
        );
    }
    setDateValue(formattedDate);
  };
  return (
    <>
      <TextField
        error={error}
        helperText={errorText}
        onBlur={dateValidate}
        name="expiraion_date"
        margin="normal"
        required
        fullWidth
        label="Expiration Date"
        placeholder="MM/YYYY"
        type="text"
        inputProps={{ maxLength: 7 }}
        id="expiraion_date"
        autoComplete="expiraion_date"
        onChange={dateFormatter}
        value={dateValue}
      />
    </>
  );
};
export default ExpireDate;
