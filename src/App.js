import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Bisection, FalsePosition, OnePointIteration, Secant, NewTonRaphson } from "./pages";
import Layout from "./components/Layout";

import "./App.css";

function App() {
  const links = [
    {
      name: "Roots of Equations",
      open: false,
      links: [
        { name: "Bisection", link: "/bisection", component: <Bisection /> },
        {
          name: "False Position",
          link: "/false-position",
          component: <FalsePosition />,
        },
        {
          name: "One Point Iteration",
          link: "/one-point-iteration",
          component: <OnePointIteration />,
        },
        { name: "Newton Raphson", link: "/newton-raphson", component: <NewTonRaphson /> },
        { name: "Secant", link: "/secant", component: <Secant /> },
      ],
    },
    {
      name: "Linear Algebra",
      path: "/linear_algebra",
      links: [
        { name: "Cramer's Rule", link: "/cramer", component: <div /> },
        {
          name: "Gauss Elimination",
          link: "/gauss-elimination",
          component: <div />,
        },
        { name: "Gauss Jordan", link: "/gauss-jordan", component: <div /> },
        {
          name: "LU Decomposition",
          link: "/lu-decomposition",
          component: <div />,
        },
        {
          name: "Cholesky Decomposition",
          link: "/cholesky-decomposition",
          component: <div />,
        },
        {
          name: "Jacobi Iteration",
          link: "/jacobi-iteration",
          component: <div />,
        },
        {
          name: "Gauss Seidel Iteration",
          link: "/gauss-seidel-iteration",
          component: <div />,
        },
      ],
    },
    {
      name: "Interpolation",
      path: "/interpolation",
      open: false,
      links: [
        { name: "Linear", link: "/linear", component: <div /> },
        { name: "Quadratic", link: "/quadratic", component: <div /> },
        { name: "Polynomial", link: "/polynomial", component: <div /> },
        { name: "Spline", link: "/spline", component: <div /> },
      ],
    },
    {
      name: "Least Square Regression",
      path: "/least_square_regression",
      open: false,
      links: [
        { name: "Linear", link: "/linear", component: <div /> },
        { name: "Polynomial", link: "/polynomial", component: <div /> },
        {
          name: "Multiple Linear",
          link: "/multiple-linear",
          component: <div />,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Layout links={links} />

      <div style={{ marginTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home links={links} />} />
          {links.map((data, index) =>
            data.links.map((link, index) => (
              <Route path={link.link} element={link.component} />
            ))
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
