import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

export const MachineItemsTable = ({ machineItems }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="machine items table">
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Amount (€)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {machineItems.items.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {item.description}
                            </TableCell>
                            <TableCell align="right">{item.amount.toFixed(2)} Credits</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

MachineItemsTable.propTypes = {
    machineItems: PropTypes.array.isRequired
}