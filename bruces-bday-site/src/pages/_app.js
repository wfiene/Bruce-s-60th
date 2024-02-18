import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline /> {/* CssBaseline can be removed to go back to default Nextjs Styles */}
      <Component {...pageProps} />
    </>
  );
}
