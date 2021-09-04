import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

class App extends Component {
  state = {
    menus: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ menus: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("api/menus/all");
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>메뉴명</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>음식점명</TableCell>
              <TableCell>알레르기사항</TableCell>
              <TableCell>원재료명</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.menus
              ? this.state.menus.map((m) => {
                  return (
                    <Menu
                      key={m._id}
                      imgUrl={m.imgUrl}
                      menuName={m.menuName}
                      restaurantName={m.restaurantName}
                      allergies={m.allergies}
                      ingredients={m.ingredients}
                    />
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
