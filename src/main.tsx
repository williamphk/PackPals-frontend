import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { PageProvider } from "./context/PageContext.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <PageProvider>
          <App />
        </PageProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
