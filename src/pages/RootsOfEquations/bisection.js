import React, { useState as UseState } from "react";
import {
  Button,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const bisection = () => {
  const [xl, setXl] = UseState("");
  const [xr, setXr] = UseState("");
  const [result, setResult] = UseState([]);

  const calcBisection = (xlVal, xrVal) => {
    const fx = (val = 0) => {
      return Math.pow(13, 1 / 4);
    };
    const result = [];
    for (let i = 0; i < 24; i++) {
      let xm = (xlVal + xrVal) / 2;
      const error = xm ** 4 - 13;
      const text = (
        <div>
          <h3>Iteration {i + 1}</h3>
          <p>
            xm = {xlVal} + {xrVal} / 2 = {xm}
          </p>
          <p>
            f(xm) = {xm}^4 - 13 = {error}
          </p>
          <p>error = {Math.abs((xm - xlVal) / xm) * 100}%</p>
        </div>
      );
      result.push(text);
      if (fx(xm) * fx(xlVal) === 0) {
        return xm;
      } else if (fx(xm) * fx(xlVal) < 0) {
        xrVal = xm;
      } else {
        xlVal = xm;
      }
    }
    setResult(result);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <h1>Bisection</h1>
          <p>fx = 13^1/4</p>
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
                onClick={() => calcBisection(Number(xl), Number(xr))}
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
export default bisection;
