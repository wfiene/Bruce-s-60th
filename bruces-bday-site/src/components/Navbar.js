import { AppBar, Toolbar, Typography, Container, Box, Tab, Tabs, Divider } from "@mui/material";
import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { TabContext } from "@/context/TabContext";




export default function Navbar() {
    const { tabNumber, setTabNumber } = useContext(TabContext);
    
    const handleChange = (e, newTabNumber) => {
        setTabNumber(newTabNumber);
    };

    const appBarStyle = {
        backgroundImage: 'url("/wood.png")',
        backgroundSize: 'cover'
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
