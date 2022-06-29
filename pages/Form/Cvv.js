import TextField from "@mui/material/TextField";
import React from "react";
const Cvv = ({ error, errorText, cvvValidate, cvvValue, setCvvValue }) => {
  const cvvValueFunc = (e) => {
    let value = e.target.value.split(" ").join("");
    if (value.length > 0) {
      value = value.replace(
        /[^0-9]/g,
        "" // To allow only numbers
      );
    }
    setCvvValue(value);
  };
  return (
    <>
      <TextField
        error={error}
        value={cvvValue}
        helperText={errorText}
        onChange={cvvValueFunc}
        onBlur={cvvValidate}
        margin="normal"
        required
        fullWidth
        name="cvv"
        label="CVV"
        type="password"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        inputProps={{ maxLength: 3 }}
        id="cvv"
        autoComplete="cvv"
      />
    </>
  );
};
export default Cvv;
