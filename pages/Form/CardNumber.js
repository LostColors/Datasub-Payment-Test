import TextField from "@mui/material/TextField";
import React from "react";
const CardNumber = ({
  error,
  errorText,
  cardValidate,
  cardValue,
  setCardValue,
}) => {
  const formatAndSetCcNumber = (e) => {
    // console.log(e.target.value);
    let formattedText = e.target.value.split(" ").join("");
    if (formattedText.length > 0) {
      formattedText = formattedText
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }

    setCardValue(formattedText);
  };

  return (
    <>
      <TextField
        error={error}
        className="cardnumber"
        name="cardnumber"
        margin="normal"
        required
        fullWidth
        id="card_number"
        label="Card Number"
        placeholder="0000 0000 0000 0000"
        autoComplete="cardnumber"
        type="text"
        inputProps={{ maxLength: 19 }}
        onChange={formatAndSetCcNumber}
        onBlur={cardValidate}
        value={cardValue}
        helperText={errorText}
      />
    </>
  );
};
export default CardNumber;
