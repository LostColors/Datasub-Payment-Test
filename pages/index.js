import React, { useEffect, useSate, useState } from "react";
import { useForm } from "react-hook-form";
import CardNumber from "./Form/CardNumber";
import ExpireDate from "./Form/ExpireDate";
import Cvv from "./Form/Cvv";
import Amount from "./Form/Amount";

import styles from "../styles/Home.module.css";

import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const theme = createTheme();

export default function Home() {
  //-------------server--------------

  //-------------server--------------//

  //----------useState-------------
  const [allData, setAllData] = useState("");
  const [cardValue, setCardValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [cvvValue, setCvvValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState({
    cardError: false,
    dateError: false,
    cvvError: false,
    amountError: false,
  });
  const [errorText, setErrorText] = useState({
    cardErrorText: "",
    dateErrorText: "",
    cvvErrorText: "",
    amountErrorText: "",
  });

  const [paymentData, setPaymentData] = useState({
    CardNumber: "",
    ExpDate: "",
    Cvv: "",
    Amount: "",
  });

  //-----------useState------------//

  //----------enableButton---------

  useEffect(() => {
    const enableButton = () => {
      !error.cardError &&
      !error.dateError &&
      !error.cvvError &&
      !error.amountError &&
      cardValue != "" &&
      dateValue != "" &&
      cvvValue != "" &&
      amountValue != ""
        ? setButtonDisabled(false)
        : setButtonDisabled(true);
    };
    enableButton();
  }, [error, dateValue, cardValue, cvvValue, amountValue]);

  //----------enableButton---------//

  //-----------validator----------

  const cardValidate = (e) => {
    if (
      e.target.value == null ||
      e.target.value == undefined ||
      e.target.value.length < 19
    ) {
      setError({ ...error, cardError: true });
      setErrorText({
        ...errorText,
        cardErrorText: "Please, enter correct card number!",
      });
    } else {
      setError({ ...error, cardError: false });
      setErrorText({ ...errorText, cardErrorText: "" });
    }
  };
  const dateValidate = (e) => {
    if (
      e.target.value == null ||
      e.target.value == undefined ||
      e.target.value.length < 5
    ) {
      setError({ ...error, dateError: true });
      setErrorText({
        ...errorText,
        dateErrorText: "Please, enter correct expire date of your card!",
      });
    } else {
      setError({ ...error, dateError: false });
      setErrorText({ ...errorText, dateErrorText: "" });
    }
  };
  const cvvValidate = (e) => {
    if (
      e.target.value == null ||
      e.target.value == undefined ||
      e.target.value.length < 3
    ) {
      setError({ ...error, cvvError: true });
      setErrorText({
        ...errorText,
        cvvErrorText: "Please, enter correct cvv number!",
      });
    } else {
      setError({ ...error, cvvError: false });
      setErrorText({ ...errorText, cvvErrorText: "" });
    }
  };

  const amountValidate = (e) => {
    if (
      e.target.value == null ||
      e.target.value == undefined ||
      e.target.value == ""
    ) {
      setError({ ...error, amountError: true });
      setErrorText({
        ...errorText,
        amountErrorText: "Please, enter amount of money you want transfer!",
      });
    } else {
      setError({ ...error, amountError: false });
      setErrorText({ ...errorText, amountErrorText: "" });
    }
  };

  //-----------validator----------//

  //----------Submit-------------

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newObj = {
      cardNumber: data.get("cardnumber").replace(/ /g, ""),
      ExpDate: data.get("expiraion_date"),
      Cvv: data.get("cvv"),
      Amount: data.get("amount"),
    };
    setPaymentData(newObj);
  };
  const davai = async () => {
    const response = await fetch("api/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });
    const resData = await response.json();
    console.log(resData);
  };
  //----------Submit------------//

  //---------Background-Gradient-------------

  const mouseHover = () => {
    document.getElementById("back").style.backgroundImage =
      "linear-gradient(45deg, #fff1eb 0%, #ace0f9 100%)";
    // document.getElementById("back").classList.add("hober");
  };
  const mouseLeave = () => {
    document.getElementById("back").style.backgroundImage =
      "linear-gradient(45deg, #ace0f9 0%, #fff1eb 100%)";
    // document.getElementById("back").classList.remove("hober");
  };

  //---------Background-Gradient-------------//

  return (
    <div id="back" className={styles.container}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              paddingTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AttachMoneyIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Datasub Payment Test
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <CardNumber
                    error={error.cardError}
                    errorText={errorText.cardErrorText}
                    cardValidate={cardValidate}
                    cardValue={cardValue}
                    setCardValue={setCardValue}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ExpireDate
                    error={error.dateError}
                    errorText={errorText.dateErrorText}
                    dateValidate={dateValidate}
                    dateValue={dateValue}
                    setDateValue={setDateValue}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Cvv
                    error={error.cvvError}
                    errorText={errorText.cvvErrorText}
                    cvvValidate={cvvValidate}
                    cvvValue={cvvValue}
                    setCvvValue={setCvvValue}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Amount
                    error={error.amountError}
                    errorText={errorText.amountErrorText}
                    amountValidate={amountValidate}
                    amountValue={amountValue}
                    setAmountValue={setAmountValue}
                  />
                </Grid>
              </Grid>
              <Button
                id="button"
                onClick={davai}
                onMouseOver={mouseHover}
                onMouseLeave={mouseLeave}
                disabled={buttonDisabled}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Pay
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
