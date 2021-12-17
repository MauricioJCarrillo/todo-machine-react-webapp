import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

export function TodoSearch(props) {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);        
    };

    return (
        <section className="TodoSearch-container">
            <input 
                className="TodoSearch" 
                placeholder="Search Task"
                value={searchValue}
                onChange={onSearchValueChange} 
            />
            {props.children}
        </section>
    );
}