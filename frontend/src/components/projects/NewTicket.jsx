import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const priorities = [
    {
        value: 'low',
        label: 'Low',
    },
    {
        value: 'medium',
        label: 'Medium',
    },
    {
        value: 'high',
        label: 'High',
    },
];
const devices = [
    {
        value: 'phone',
        label: 'Cell phone',
    },
    {
        value: 'laptop',
        label: 'Laptop',
    },
    {
        value: 'pc',
        label: 'PC',
    },
    {
        value: 'tablet',
        label: 'Tablet',
    },
];
const browsers = [
    {
        value: 'google chrome',
        label: 'Google Chrome',
    },
    {
        value: 'safari',
        label: 'Safari',
    },
    {
        value: 'microsft edge',
        label: 'Microsft Edge',
    },
    {
        value: 'mozilla firefox',
        label: 'Mozilla Firefox',
    },
    {
        value: 'other',
        label: 'Other',
    },
];

function NewTicket() {
    const [priority, setPiority] = useState('low');
    const [device, setDevice] = useState('');
    const [browser, setBrowser] = useState('');

    const handlePriorityChange = (event) => {
        setPiority(event.target.value);
    };

    const handleDeviceChange = (event) => {
        setDevice(event.target.value);
    };

    const handleBrowserChange = (event) => {
        setBrowser(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    };
    return (
        <div>
            <Container component="main" maxWidth="lg">
                <Box
                    sx={{
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'white',
                        padding: 2,
                        borderRadius: 2,
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                        Fill out the form to submit a ticket
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="title"
                                    required
                                    fullWidth
                                    id="title"
                                    label="What is this ticket about ?"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select
                                    fullWidth
                                    id="priority"
                                    label="Please select the ticket's priority type"
                                    name="priority"
                                    value={priority}
                                    onChange={handlePriorityChange}
                                >
                                    {priorities.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select
                                    fullWidth
                                    required
                                    id="device"
                                    label="Which device are you using ?"
                                    name="device"
                                    value={device}
                                    onChange={handleDeviceChange}
                                    helperText="Please select your device"
                                >
                                    {devices.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    select
                                    fullWidth
                                    required
                                    id="browser"
                                    label="Which browser are you using ?"
                                    name="browser"
                                    value={browser}
                                    onChange={handleBrowserChange}
                                    helperText="Please select your browser"
                                >
                                    {browsers.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    rows={6}
                                    name="description"
                                    id="description"
                                    label="Describe the issue"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                bgcolor: 'primary.main',
                                fontSize: '1.3rem',
                                pt: 1,
                                pb: 1,
                                mt: 3,
                                mb: 2,
                            }}
                        >
                            Submit ticket
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default NewTicket;
