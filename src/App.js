import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@material-ui/core";
import React from "react";
import Search from "./Search";
import Table from "./Tables";
import HomePage from "./HomePage";
import Subjects from "./Subjects"
import {NavLink, Route, Routes} from "react-router-dom";
function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/Search" element={<Search isSubject={false} heading="Book Title/Author Search Page"/>}/>
        <Route path="/Subjects" element={<Subjects/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default React.memo(App);
