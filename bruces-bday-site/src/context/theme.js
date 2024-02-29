import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useState } from 'react';


export const ThemeModeContext = createContext();

function ThemeWrapper({ children }) {
    const light = createTheme({
        palette: {
            mode: 'light',
        },
    });
    return (
        <ThemeModeContext.Provider>
            <ThemeProvider theme={light}>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};

export default ThemeWrapper
