import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { NavLink, Route, Routes } from "react-router-dom";
import { Typography } from "@material-ui/core";
function HomePage() {
  return (
    <Container>
      <h1>Library Home Page</h1>

      <NavLink to="/Search">
        <Typography variant="h5">
          Search based on Book title or Author
        </Typography>
      </NavLink>
      <hr />
      <NavLink to="/Subjects">
        <Typography variant="h5">Search based on the Subject</Typography>
      </NavLink>
    </Container>
  );
}

export default React.memo(HomePage);
