import Dashboard from './components/Dashboard';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProjects from './components/projects/AllProjects';
import Chat from './components/Chat';
import MyTeam from './components/MyTeam';
import ManageRole from './components/ManageRole';
import MyTickets from './components/projects/MyTickets';
import DashboardLayout from './components/DashboardLayout';
import { CssBaseline } from '@mui/material';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <DashboardLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="AllProjects" element={<AllProjects />} />
                    <Route path="Chat" element={<Chat />} />
                    <Route path="MyTeam" element={<MyTeam />} />
                    <Route path="ManageRole" element={<ManageRole />} />
                    <Route path="MyTickets" element={<MyTickets />} />
                </Routes>
            </DashboardLayout>
        </div>
    );
}

export default App;
