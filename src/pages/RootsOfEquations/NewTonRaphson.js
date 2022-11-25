import React, { useState as UseState } from "react";
import {
  Button,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const newTonRaphson = () => {
  const [xl, setXl] = UseState("");
  const [xr, setXr] = UseState("");
  const [result, setResult] = UseState([]);

  const calcNewTonRaphson = (x0, x) => {
    const fun = (y = 0) => {
      return y * y - 7;
    };
    const result = [];
    x0 = 1;
    x = 2;
    let xn = 0;
    do {
      x0 = x;
      x = xn;
      xn = x - (fun(x) * (x0 - x)) / (fun(x0) - fun(x));
      const text = (
        <div>
          <h3>Iteration {result.length + 1}</h3>
          <p>
            x = {x} - ({fun(x)}) * ({x0} - {x}) / ({fun(x0)} - {fun(x)}) = {xn}
          </p>
          <p>error = {(Math.abs((xn - x) / xn) * 100).toFixed(6)}%</p>
        </div>
      );
      result.push(text);
    } while (Math.abs(((x - x0) / x) * 100) > 0.000001);
    setResult(result);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <h1>Newton Raphson</h1>
          <p>fx = ln</p>
          <p>x = 4</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="x0"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                onChange={(e) => setXl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="x"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                onChange={(e) => setXr(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                disabled={xl === "" || xr === ""}
                onClick={() => calcNewTonRaphson(Number(xl), Number(xr))}
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
export default newTonRaphson;
