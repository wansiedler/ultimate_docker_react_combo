import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Loader from "../Loader/Loader";

const useStyles = theme => ({
  table: {
    backgroundColor: "#515151"
    // minWidth: 650,
  },
});

class OrderList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  handleClick(event) {
    event.preventDefault();
    console.log('The link was clicked.');
  }

  descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => this.descendingComparator(a, b, orderBy)
      : (a, b) => this.descendingComparator(a, b, orderBy);
  }

  stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  renderTableData() {
    return this.props.orders.map((order, index) => {
      const {
        id, symbol, volume, open_price, close_price
      } = order;
      return (
        <TableRow key={id} onClick={this.handleClick}>
          <TableCell component="th" scope="row">{id}</TableCell>
          <TableCell component="th" scope="row">{symbol}</TableCell>
          <TableCell component="th" scope="row">{volume}</TableCell>
          <TableCell component="th" scope="row">{open_price}</TableCell>
          <TableCell component="th" scope="row">{close_price}</TableCell>
        </TableRow>
      );
    });
  }


    render() {
      const {
        classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort
      } = this.props;
      const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
      };
      return (
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*{this.renderTableData()}*/}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
}

export default withStyles(useStyles, { withTheme: true })(OrderList);
