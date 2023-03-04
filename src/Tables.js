import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 20,
    marginBottom: 30,
  },
  rowHead: {
    fontWeight: 600,
  },
});

function createData(
  title,
  author_name,
  latest_publish_year,
  first_publish_year
) {
  return { title, author_name, latest_publish_year, first_publish_year };
}

function Tables(props) {
  const classes = useStyles();
  console.log(props.items);
  const data = props.items.map((item) => {

    var title,name,first,last
    if(!Object.hasOwn(item, 'title')){
      title = "--"
    } else title = item.title
    if(!Object.hasOwn(item,'publish_year')){
      last = "--"
    } else {
      const len = item.publish_year.length;
      last = item.publish_year[len - 1];
    }
    if(!Object.hasOwn(item,'first_publish_year')){
      first = "--"
    } else first = item.first_publish_year
    if(props.isSubject){
      name = item.authors[0].name
    } else{
    if(!Object.hasOwn(item,'author_name')){
      name = "--"
    } else name = item.author_name
  }
    
      return createData(
        title,
        name,
        last,
        first
      );
    
  });

  const rows = data;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.rowHead}>
              Title and Sub Title
            </TableCell>
            <TableCell className={classes.rowHead}>Author Name</TableCell>
            <TableCell className={classes.rowHead}>
              Latest Publish Year
            </TableCell>
            <TableCell className={classes.rowHead}>
              First Publish Year
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.author_name}</TableCell>
              <TableCell>{row.latest_publish_year}</TableCell>
              <TableCell>{row.first_publish_year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(Tables)
