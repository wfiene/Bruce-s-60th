import { AppBar, Toolbar, Typography, Container, Box, Tab, Tabs, Divider } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";




export default function Navbar() {
    const [tabNumber, setTabNumber] = useState(1)

    const appBarStyle = {
        backgroundImage: 'url("/wood.png")',
        backgroundSize: 'cover'
    };

    const linkStyle = {
        margin: '0 30px', // Adjust spacing around each link as needed
        color: 'inherit', // Inherit the text color from the parent
        textDecoration: 'none', // Remove underline from links
    };

    const handleChange = (e, newTabNumber) => {
        setTabNumber(newTabNumber);
    };



    const StyledTab = styled(Tab)({
        "&.Mui-selected": {
            color: "black",
            backgroundColor: 'white',
            borderRadius: '5px 5px 0 0'
        }
    });

    return (
        <AppBar position="static" style={appBarStyle} sx={{ p: 0 }}>
            <Container maxWidth='xl' sx={{ p: 0, }}>
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
                    <Box sx={{ borderBottom: 5, borderColor: 'divider', p: 0 }}>
                        <Tabs
                            textColor="white"
                            indicatorColor="secondary"
                            value={tabNumber}
                            onChange={handleChange}
                        >
                            <StyledTab label="Home" />
                            <StyledTab label="Venue" />
                            <StyledTab label="Hotels" />
                        </Tabs>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
