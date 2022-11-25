import React, { useState as UseState } from "react";
import {
  Button,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const OnePointIteration = () => {
  const [xl, setXl] = UseState("");
  const [result, setResult] = UseState([]);
  //calculate one point iteration
  const calcOnePointIteration = (x1) => {
    const fx = (val = 0) => {
      return (1 / 2) * Math.pow(val, 0);
    };
    const result = [];
    let percent = 100,
      i = 0;
    while (percent > 0.0000001) {
      let x2 = fx(x1);
      percent = Math.abs((x2 - x1) / x2) * 100;
      x1 = x2;
      const text = (
        <div>
          <h3>Iteration {++i}</h3>
          <p>
            x1+1 = -x1 + 0.5 + x{i} = {x1}
          </p>
          <p>x2 = {x2}</p>
          <p>error = {percent}%</p>
        </div>
      );
      result.push(text);
    }
    setResult(result);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <h1>One Point Iteration</h1>
          <p>fx = 13^1/4</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="xl"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                onChange={(e) => setXl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                disabled={xl === ""}
                onClick={() => calcOnePointIteration(Number(xl))}
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
export default OnePointIteration;
