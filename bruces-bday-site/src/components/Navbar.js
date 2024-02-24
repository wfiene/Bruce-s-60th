import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export default function Navbar() {

    const appBarStyle = {
        backgroundImage: 'url("/wood.png")',
        backgroundSize: 'cover' // Ensures the background covers the AppBar
    };

    return (
        <AppBar position="static" style={appBarStyle}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography>
                        Test
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
