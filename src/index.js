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


when we make createContext we wrap around all the components while sending value using provider
like this in App.js
const Detail = createContext();
<Detail.provider value="ajda" || value = {object/array etc}>
  <CompA />
  <CompB />
  ...
</Detail.Provider>

but this time we make diff file only for create context so for that syntax is in Context.js 
but we still have to wrap it around so we do that in index.js or we can do it in App.js too

*/