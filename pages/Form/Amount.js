import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";

const Amount = ({
  error,
  errorText,
  amountValidate,
  amountValue,
  setAmountValue,
}) => {
  const amountValueFunc = (e) => {
    let value = e.target.value.split(" ").join("");
    if (value.length > 0) {
      value = value.replace(
        /[^0-9]/g,
        "" // To allow only numbers
      );
    }
    setAmountValue(value);
  };
  return (
    <>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          onChange={amountValueFunc}
          value={amountValue}
          error={error}
          name="amount"
          type="number"
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
          onBlur={amountValidate}
        />
        {error && (
          <FormHelperText htmlFor="form-selector" error={!!error}>
            {errorText}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};
export default Amount;
