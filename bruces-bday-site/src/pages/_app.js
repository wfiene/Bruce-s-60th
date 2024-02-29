import ThemeWrapper from "@/context/theme";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeWrapper>
        <CssBaseline /> {/* CssBaseline can be removed to go back to default Nextjs Styles */}
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
}
