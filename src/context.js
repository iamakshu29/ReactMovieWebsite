import React, { useContext, createContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

// custom global hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
// its use is only that 
/*
  after createContext in parent
        const variable = createContext(); 
        
  when we want to use it then we have to write this 
      const{anyName} = useContext(variable); and also import useContext from React and AppContext too

  So to not write 27 line things 

  we just pass the useContext() with its createContext ie AppContext here in a func we call a custom hook

  Check both the or statements both work fine in Movies file
  it is also use in Search file
  
 */



export { AppContext, AppProvider, useGlobalContext };