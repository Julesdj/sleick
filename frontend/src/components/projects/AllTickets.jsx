import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

const columns = [
    { field: 'Title', headerName: 'Ticket title', width: 180 },
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
                onClick={() => console.log('delete')}
                label="Delete"
            />,
            <GridActionsCellItem
                icon={<EditIcon />}
                onClick={() => console.log('edit')}
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
];

function AllTickets() {
    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    mt: 1,
                }}
            >
                <Typography variant="h4">Tickets table</Typography>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="/user/new-ticket"
                    size="medium"
                    sx={{
                        color: 'white',
                        bgcolor: 'secondary.dark',
                    }}
                >
                    <AddIcon />
                    Add
                </Button>
            </Box>
            <Box
                sx={{
                    height: '75vh',
                    width: '100%',
                    bgcolor: 'white',
                    padding: 2,
                    borderRadius: 2,
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={15}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Box>
        </Container>
    );
}

export default AllTickets;
