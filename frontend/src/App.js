import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Projects from "./components/projects/Projects";
import Chat from "./components/Chat";
import MyTeam from "./components/MyTeam";
import ManageRole from "./components/ManageRole";
import MyTickets from "./components/projects/MyTickets";
import Page404 from "./components/Page404";
import SignIn from "./components/users/SignIn";
import SignUp from "./components/users/SignUp";
import RequireAuthn from "./services/RequireAuthn";
import NewTicket from "./components/projects/NewTicket";
import Tickets from "./components/projects/Tickets";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route
                    path="/user/*"
                    element={
                        <RequireAuthn>
                            <Layout>
                                <Routes>
                                    <Route
                                        path="dashboard"
                                        element={<Dashboard />}
                                    />
                                    <Route
                                        path="projects"
                                        element={<Projects />}
                                    />
                                    <Route
                                        path="tickets"
                                        element={<Tickets />}
                                    />
                                    <Route path="chat" element={<Chat />} />
                                    <Route
                                        path="my-team"
                                        element={<MyTeam />}
                                    />
                                    <Route
                                        path="manage-role"
                                        element={<ManageRole />}
                                    />
                                    <Route
                                        path="my-tickets"
                                        element={<MyTickets />}
                                    />
                                    <Route
                                        path="new-ticket"
                                        element={<NewTicket />}
                                    />
                                    <Route path="*" element={<Page404 />} />
                                </Routes>
                            </Layout>
                        </RequireAuthn>
                    }
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route
                    path="/user"
                    element={<Navigate to="/login" replace />}
                />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default App;
