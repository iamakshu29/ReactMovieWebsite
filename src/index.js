import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);

/* we understand how the context hook works but in this project we made it in another folder name
context.js thats why this one is bit different
first we createContext() in context.js and then make a provider AppProvider func
AppProvider needs to wrapped around all element to make it work normally so, we wrapped it in index.js 


*/