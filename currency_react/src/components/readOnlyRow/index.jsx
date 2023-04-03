import React from "react";
import { TableCell, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ReadOnlyRow = ({ row, onClick }) => {
    return (
        <TableRow>
            <TableCell>{row.txt}</TableCell>
            <TableCell>{row.rate ? row.rate.toFixed(2) : row.value.toFixed(2)}
            </TableCell>
            <TableCell>{row.cc}</TableCell>
            <TableCell>
                <button
                    className="edit-button"
                    type="button"
                    onClick={onClick}>
                    <EditIcon />
                </button>
            </TableCell>
        </TableRow>
    )
}

export default ReadOnlyRow;