import { useEffect, useReducer } from "react";
import { parseISO } from "date-fns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { reducer, getTickets } from "../../services/ticket.service";

const columns = [
    { field: "Title", headerName: "Ticket title", width: 220 },
    {
        field: "Priority",
        headerName: "Priority",
        width: 120,
        backgroundColor: "green",
        editable: true,
    },
    {
        field: "Status",
        headerName: "Status",
        width: 120,
        editable: true,
    },
    {
        field: "fullName",
        headerName: "Submitter",
        width: 230,
    },
    {
        field: "date",
        headerName: "Submition date",
        type: "date",
        width: 220,
        editable: true,
    },
    {
        field: "actions",
        headerName: "Actions",
        width: 150,
        type: "actions",
        getActions: (params) => [
            <GridActionsCellItem
                icon={<DeleteIcon />}
                onClick={() => console.log("delete")}
                label="Delete"
            />,
            <GridActionsCellItem
                icon={<EditIcon />}
                onClick={() => console.log("edit")}
                label="Delete"
            />,
        ],
    },
];

function Tickets() {
    const [{ loading, error, tickets }, dispatch] = useReducer(reducer, {
        tickets: [],
        loading: true,
        error: "",
    });

    useEffect(() => {
        async function getTicketsData() {
            try {
                const { data } = await getTickets();
                dispatch({ type: "FETCH_SUCCESS", payload: data });
            } catch (error) {
                dispatch({ type: "FETCH_FAILED", payload: error.message });
            }
        }
        getTicketsData();
    }, []);

    const rows = tickets.map((ticket) => ({
        id: ticket._id,
        Title: ticket.title,
        Priority: ticket.priority,
        Status: ticket.status,
        fullName:
            ticket.submitterId["firstName"] +
            " " +
            ticket.submitterId["lastName"],
        date: parseISO(ticket.createdAt),
    }));
    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                    mt: 1,
                }}
            >
                <Typography variant="h4">Tickets</Typography>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="/user/new-ticket"
                    size="medium"
                    sx={{
                        color: "white",
                        bgcolor: "secondary.dark",
                    }}
                >
                    <AddIcon />
                    Add
                </Button>
            </Box>
            <Box
                sx={{
                    height: "75vh",
                    width: "100%",
                    bgcolor: "white",
                    padding: 2,
                    borderRadius: 2,
                }}
            >
                {loading ? (
                    <Box
                        sx={{
                            my: "30vh",
                            mx: "auto",
                            height: "30vh",
                            width: "30vw",
                        }}
                    >
                        <CircularProgress size={60} />
                    </Box>
                ) : error ? (
                    <Box
                        sx={{
                            my: "30vh",
                            mx: "auto",
                            height: "30vh",
                            width: "30vw",
                        }}
                    >
                        {error}
                    </Box>
                ) : (
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={15}
                        rowsPerPageOptions={[15]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                )}
            </Box>
        </Container>
    );
}

export default Tickets;
