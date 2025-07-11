import React from "react";
//functoin component
export default function FuncComp(props: any) {
    return (
        <div>
            <h2>Functional Component</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        <p>compony: {props.compony}</p>
    </div>
);
}