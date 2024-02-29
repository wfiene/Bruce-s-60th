import { AppBar, Toolbar, Typography, Container, Box, Tab, Tabs } from "@mui/material";




export default function Navbar() {

    const appBarStyle = {
        backgroundImage: 'url("/wood.png")',
        backgroundSize: 'cover'
    };

    const linkStyle = {
        margin: '0 30px', // Adjust spacing around each link as needed
        color: 'inherit', // Inherit the text color from the parent
        textDecoration: 'none', // Remove underline from links
    };

    return (
        <AppBar position="static" style={appBarStyle}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    {/* <Typography variant="h6" component="div" style={linkStyle}>
                        Home
                    </Typography>
                    <Typography variant="h6" component="div" style={linkStyle}>
                        Venue
                    </Typography>
                    <Typography variant="h6" component="div" style={linkStyle}>
                        Hotels
                    </Typography> */}
                    {/* <Typography variant="h6" component="div" style={linkStyle}>
                        Picture Board
                    </Typography>
                    <Typography variant="h6" component="div" style={linkStyle}>
                        Message Board
                    </Typography> */}
                    <Box sx={{ borderBottom: 5, borderColor: 'divider' }}>
                        <Tabs aria-label="basic tabs example" textColor="white" indicatorColor="secondary">
                            <Tab label="Home" />
                            <Tab label="Venue" />
                            <Tab label="Hotels" />
                        </Tabs>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
