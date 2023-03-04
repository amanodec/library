import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Search from "./Search";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Lists from "./Lists";
function Subjects() {
  return (
    <Container>
      <Search isSubject={true}heading="Subjects Search Page"/>
    </Container>
  );
}

export default React.memo(Subjects);
