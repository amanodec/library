import React from "react";
import Lists from "./Lists";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tables from "./Tables";
import Button from "@mui/material/Button";
import { NavLink, Route, Routes } from "react-router-dom";

const useStyles = makeStyles({
  tableStyle: {
    marginBottom: 10,
  },
  buttonGroup: {
    marginLeft: 200,
  },
});

function Search(props) {
  const [title, setTitle] = React.useState("");
  const [titleError, setTitleError] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(2);

  const classes = useStyles();

  function fetchData(page, setItems) {
    console.log(title);
    if (props.isSubject) {
      console.log(title);
      if (title.length === 0) return;
      fetch(`https://openlibrary.org/subjects/${title}.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.works);
          setItems(data.works);
        });
    } else {
      console.log(title);
      fetch(
        `https://openlibrary.org/search.json?q=${title}&page=${page}&limit=10`
      )
        .then((res) => res.json())
        .then((data) => {
          setItems(data.docs);
          console.log(items);
        });
    }
  }

  React.useEffect(() => {
    fetchData(currentPage, setItems);
  }, [currentPage]);

  function handlePrevClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextClick() {
    setCurrentPage(currentPage + 1);
  }

  function btnClick(e) {
    e.preventDefault();
    console.log(e.target.innerText);
    setTitle(e.target.innerText);
    console.log(title);
    fetchData(currentPage, setItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTitleError(false);
    if (!title) {
      setTitleError(true);
    } else {
      console.log(title);
      fetchData(currentPage, setItems);
    }
  }

  return (
    <Container>
      <NavLink to="/">
        <h1>Library</h1>
      </NavLink>
      <h1>{props.heading}</h1>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          color="secondary"
          label="Search by book title or author name"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon onClick={handleSubmit} />
              </InputAdornment>
            ),
          }}
        />
      </form>

      {props.isSubject && (
        <Container>
          <ol>
            <Typography style={{ fontWeight: 600 }} variant="h5">
              Javascript
            </Typography>
            <Typography style={{ fontWeight: 600 }} variant="h5">
              Indian History
            </Typography>
            <Typography style={{ fontWeight: 600 }} variant="h5">
              Crypto Currency
            </Typography>
            <Typography style={{ fontWeight: 600 }} variant="h5">
              Horror
            </Typography>
            <Typography style={{ fontWeight: 600 }} variant="h5">
              Cricket
            </Typography>
          </ol>
        </Container>
      )}

      {props.isSubject && (
        // <SubjectTable className={classes.tableStyle} items={items} />
        <Tables isSubject={true} className={classes.tableStyle} items={items} />
      )}
      {!props.isSubject && (
        <Tables
          isSubject={false}
          className={classes.tableStyle}
          items={items}
        />
      )}
      <Button
        className={classes.buttonGroup}
        variant="contained"
        color="primary"
        onClick={handlePrevClick}
      >
        Prev
      </Button>
      <Button variant="contained" color="primary" onClick={handleNextClick}>
        Next
      </Button>
    </Container>
  );
}

export default React.memo(Search);
