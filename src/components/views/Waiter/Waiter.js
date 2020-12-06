import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.array,
    updateStatus: PropTypes.func,

  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(row) {
    const { updateStatus } = this.props;
    switch (row.status) {
      case 'free':
        return (
          <>
            <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`} >new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => updateStatus(row.id, 'prepared', row.order)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => updateStatus(row.id, 'delivered', row.order)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => updateStatus(row.id, 'paid', row.order)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => updateStatus(row.id, 'done', row.order)}>done</Button>
        );
      case 'done':
        return (
          <Button onClick={() => updateStatus(row.id, 'ordered', row.order)}>ordered</Button>
        );
      default:
        return null;


    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={styles.component}>
          <h2> Waiter view</h2>
          <Paper >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>
                      {row.id}
                    </TableCell>
                    <TableCell>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      {row.order && (
                        <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {this.renderActions(row)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      );
    }
  }
}

export default Waiter;