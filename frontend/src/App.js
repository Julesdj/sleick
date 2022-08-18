import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import { CssBaseline } from '@mui/material';
import SignUp from './components/SignUp';

import Dashboard from './components/Dashboard';
// import { Route, Routes } from 'react-router-dom';
import AllProjects from './components/projects/AllProjects';
import Chat from './components/Chat';
import MyTeam from './components/MyTeam';
import ManageRole from './components/ManageRole';
import MyTickets from './components/projects/MyTickets';
import Page404 from './components/Page404';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route
                    path="/user"
                    element={<Navigate to="/user/dashboard" replace />}
                />
                <Route
                    path="/user/*"
                    element={
                        <DashboardLayout>
                            <Routes>
                                <Route
                                    path="dashboard"
                                    element={<Dashboard />}
                                />
                                <Route
                                    path="all-projects"
                                    element={<AllProjects />}
                                />
                                <Route path="chat" element={<Chat />} />
                                <Route path="my-team" element={<MyTeam />} />
                                <Route
                                    path="manage-role"
                                    element={<ManageRole />}
                                />
                                <Route
                                    path="my-tickets"
                                    element={<MyTickets />}
                                />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </DashboardLayout>
                    }
                />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default App;
