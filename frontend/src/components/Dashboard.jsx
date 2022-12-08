import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Charts from "./charts/Charts";
import authn from "../services/authn.service";

function Dashboard() {
    const [user, setUser] = useState({});
    useEffect(() => {
        try {
            let currentUser = authn.getCurrentUser();
            setUser(currentUser);
        } catch (err) {}
    }, []);
    return (
        <div>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h4" noWrap component="div">
                    Welcome <strong>{user.firstName}</strong>!
                </Typography>
            </Box>
            <Charts />
        </div>
    );
}

export default Dashboard;
