import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const PAGE_OPTIONS = [10, 25, 100];
const useStyles = makeStyles({
    container: {
        maxHeight: 401,
        overflowY: "auto",
        margin: 0,
        padding: 0,
        listStyle: "none",
        height: "100%",
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#056fcb',
            outline: '1px solid #056fcb'
        }
    },
});

function DataTable(props) {
    const classes = useStyles();
    const { columns, data, pageOptions, handlePageChange, handlePageRowsChange } = props;
    const [pagination, setPagination] = React.useState({
        page: 0,
        rowsPerPage: 10
    })

    const onPageChange = (event, newPage) => {
        setPagination({ ...pagination, page: newPage });
        handlePageChange();
    }

    const onRowsPerPageChange = (event) => {
        setPagination({ rowsPerPage: event.target.value, page: 0 });
        handlePageRowsChange();
    }
    
    return (
        <div>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead sx={{
                        backgroundColor:"#ff3300"
                    }}>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={`col_head_${column.id}`}
                                    align={column.align ? 'left' : 'left'}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <TableContainer className={classes.container}>
                <Table>
                    <TableBody>
                        {data.slice(pagination.page * pagination.rowsPerPage, pagination.page * pagination.rowsPerPage + pagination.rowsPerPage).map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={`row_${index}`}>
                                    {columns.map((column) => {
                                        const value = row[column.id];

                                        return (column.component ? (
                                            <TableCell key={`cell_${column.id}`} align={column.align ? column.align : 'center'}>
                                                <column.component userData={row} />
                                            </TableCell>
                                        ) : (
                                            <TableCell key={`cell_${column.id}`} align={column.align ? column.align : 'left'}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        ));
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={pageOptions || PAGE_OPTIONS}
                component="div"
                count={data.length}
                rowsPerPage={pagination.rowsPerPage}
                page={pagination.page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </div>
    )
}

export default DataTable
