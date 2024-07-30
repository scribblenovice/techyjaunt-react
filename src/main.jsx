import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import "remixicon/fonts/remixicon.css";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarProvider
    maxSnack={2}
    autoHideDuration={2000}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
  >
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </SnackbarProvider>
);
