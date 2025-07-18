import React from "react";
//functoin component
interface props {
    name: string;
    age?: number; // optional
    compony: string;
}
export default function FuncComp({name, age, compony}: props) {
    return (
        <div>
            <h2>Functional Component 1</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        <p>compony: {compony}</p>
    </div>
);
}