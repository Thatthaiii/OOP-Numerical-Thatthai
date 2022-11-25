import React, { useState as UseState } from "react";
import {
  Button,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const falsePostion = () => {
  const [xl, setXl] = UseState("");
  const [xr, setXr] = UseState("");
  const [result, setResult] = UseState([]);

  const calcFalsePostion = (xlVal, xrVal) => {
    const fx = (val = 0) => {
      return 43 * val - 1;
    };
    const result = [];
    let percent = 1,
      i = 0;
    let temp;
    console.log(xlVal, xrVal);
    while (percent >= 0.000001) {
      let tmpXl = xlVal,
        tmpXr = xrVal;
      const xm =
        (xlVal * fx(xrVal) - xrVal * fx(xlVal)) / (fx(xrVal) - fx(xlVal));
      const fxResult = fx(xm);

      if (fx(xm) * fx(xrVal) > 0) {
        temp = xrVal;
        xrVal = xm;
      } else {
        temp = xlVal;
        xlVal = xm;
      }
      percent = Math.abs((xm - temp) / xm) * 100;
      console.log(temp);
      const text = (
        <div>
          <h3>Iteration {++i}</h3>
          <p>
            xm = {tmpXl} * {fx(tmpXr)} - {tmpXr} * {fx(tmpXl)} / ({fx(tmpXr)} -{" "}
            {fx(tmpXl)}) = {xm};
          </p>
          <p>f(xm) = {fxResult}</p>
          <p>error = {percent}%</p>
        </div>
      );
      result.push(text);
    }
    console.log("end");
    setResult(result);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <h1>False Position</h1>
          <p>fx = 1/43</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="xl"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                onChange={(e) => setXl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="xr"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                onChange={(e) => setXr(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                disabled={xl === "" || xr === ""}
                onClick={() => calcFalsePostion(Number(xl), Number(xr))}
              >
                Calculate
              </Button>
            </Grid>
          </Grid>
          <h1>Result</h1>
          {result.map((data, index) => (
            <div key={index}>{data}</div>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};
export default falsePostion;
