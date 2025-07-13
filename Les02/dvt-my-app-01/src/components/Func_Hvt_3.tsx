import React from "react";
//functoin component
interface props {
    name: string;
    age?: number; // optional
    compony?: string;
}
export default function Func_Hvt_3({ name, age, compony }: props) {
    return (
        <div>
            <h2>Func_Hvt_3</h2>
            <p>Name: {name}</p>
            {age !== undefined && <p>Age: {age}</p>}
            {compony !== undefined && <p>compony: {compony}</p>}
        </div>
    );
}