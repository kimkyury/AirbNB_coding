import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Menu extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.menuName}</TableCell>
        <TableCell>
          <img src={"/" + this.props.imgUrl} alt="menuImage" />
        </TableCell>
        <TableCell>{this.props.restaurantName}</TableCell>
        <TableCell>{this.props.allergies}</TableCell>
        <TableCell>{this.props.ingredients}</TableCell>
      </TableRow>
    );
  }
}

export default Menu;
