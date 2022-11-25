import React, { useState as UseState } from "react";
import {
  Button,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const Secant = () => {
  const [xl, setXl] = UseState("");
  const [xr, setXr] = UseState("");
  const [result, setResult] = UseState([]);

  const calcSecant = (x) => {
    const f = (y = 0) => {
      return y * y - 7;
    };
    const df = (y = 0) => {
      return 2 * y;
    };
    const result = [];
    let x0;
    do {
      x0 = x;
      x = x - f(x) / df(x);
      const text = (
        <div>
          <h3>Iteration {result.length + 1}</h3>
          <p>
            x = {x0} - ({f(x0)}) / ({df(x0)}) = {x}
          </p>
          <p>error = {(Math.abs((x - x0) / x) * 100).toFixed(6)}%</p>
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
          <h1>Secant</h1>
          <p>fx = root(7)</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="x"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                onChange={(e) => setXl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                disabled={xl === ""}
                onClick={() => calcSecant(Number(xl))}
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
export default Secant;
