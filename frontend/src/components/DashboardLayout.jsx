import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';

import authn from '../services/authnService';
import theme from '../theme';
import AccountMenu from '../components/users/AccountMenu';

const drawerWidth = 240;

function DashboardLayout({ window, children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [user, setUser] = useState({});
    useEffect(() => {
        try {
            let currentUser = authn.getCurrentUser();
            setUser(currentUser);
        } catch (err) {}
    }, []);

    const drawer = (
        <div>
            {/* <Toolbar> */}
            <Box sx={{ ml: 2, mt: 1 }}>
                <Typography variant="h4" noWrap component="div">
                    Tracker Inc.
                </Typography>
                <Typography variant="h6" noWrap component="div">
                    Welcome {user.firstName} {user.lastName}
                </Typography>
            </Box>
            {/* </Toolbar> */}
            <Divider />
            <List>
                <ListItem button component={RouterLink} to="/user/dashboard">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Dashboard"
                        primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                        }}
                    />
                </ListItem>
                <ListItem button component={RouterLink} to="/user/all-projects">
                    <ListItemIcon>
                        <AccountTreeIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="All Projects"
                        primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                        }}
                    />
                </ListItem>
                <ListItem button component={RouterLink} to="/user/all-tickets">
                    <ListItemIcon>
                        <ConfirmationNumberIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="All Tickets"
                        primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                        }}
                    />
                </ListItem>
                <ListItem button component={RouterLink} to="/user/my-tickets">
                    <ListItemIcon>
                        <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="My Tickets"
                        primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                        }}
                    />
                </ListItem>
                <ListItem button component={RouterLink} to="/user/manage-role">
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Manage Role"
                        primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                        }}
                    />
                </ListItem>
                <ListItem button component={RouterLink} to="/user/my-team">
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="My Team"
                        primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                        }}
                    />
                </ListItem>
                <ListItem button component={RouterLink} to="/user/chat">
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Chat"
                        primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                        }}
                    />
                </ListItem>
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Container
                    maxWidth="xlg"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // mr: 2,
                    }}
                >
                    <Toolbar sx={{ display: 'flex' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <AccountMenu />
                </Container>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            background: theme.palette.primary.dark,
                            boxSizing: 'border-box',
                            color: '#ffffff',
                            width: drawerWidth,
                        },
                        '& .MuiSvgIcon-root': {
                            color: '#ffffff',
                        },
                        '& .MuiDivider-root': {
                            borderColor: '#ffffff',
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default DashboardLayout;
