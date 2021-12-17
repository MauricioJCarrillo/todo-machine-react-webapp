import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
//import './App.css';

export function App() {
  return (
    <TodoProvider>
      <AppUI /> 
    </TodoProvider>
  );
}

