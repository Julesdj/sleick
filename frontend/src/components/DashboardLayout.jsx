import * as React from 'react';
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
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';

import theme from '../theme';
// import AccountMenu from './AccountMenu';

const drawerWidth = 240;

function DashboardLayout({ window, children }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h5" noWrap component="div">
                    TRACKER
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListItem button component={Link} href="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} href="/AllProjects">
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="All Projects" />
                </ListItem>
                <ListItem button component={Link} href="/MyTickets">
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="My Tickets" />
                </ListItem>
                <ListItem button component={Link} href="/ManageRole">
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Manage Role" />
                </ListItem>
                <ListItem button component={Link} href="/MyTeam">
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="My Team" />
                </ListItem>
                <ListItem button component={Link} href="/Chat">
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Chat" />
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
                {/* <AccountMenu /> */}
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
