import * as React from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

const columns = [
    { field: 'Title', headerName: 'Title', width: 180 },
    {
        field: 'Priority',
        headerName: 'Priority',
        width: 180,
        backgroundColor: 'green',
        editable: true,
    },
    {
        field: 'Status',
        headerName: 'Status',
        width: 180,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Submitter',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'date',
        headerName: 'Submition date',
        type: 'date',
        width: 180,
        editable: true,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        type: 'actions',
        getActions: (params) => [
            <GridActionsCellItem
                icon={<DeleteIcon />}
                onClick={() => 'even'}
                label="Delete"
            />,
            <GridActionsCellItem
                icon={<EditIcon />}
                onClick={() => 'even'}
                label="Delete"
            />,
        ],
    },
];

const rows = [
    {
        id: 1,
        Title: 'Demo project',
        Priority: 'medium',
        Status: 'Open',
        fullName: 'John Doe',
        date: '08/10/2022',
        action: 'Delete',
    },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function AllProjects() {
    return (
        <Box sx={{ height: 625, width: '90%', margin: '2rem auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[6]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}

export default AllProjects;
