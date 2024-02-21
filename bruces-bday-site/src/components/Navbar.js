import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar position="static">
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
