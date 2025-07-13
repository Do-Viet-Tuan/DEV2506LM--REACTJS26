import React from "react";
//functoin component
export default function Func_Hvt_2(props: any) {
    return (
        <div>
            <h2>Func_Hvt_2</h2>
            <p>Name: {props.name}</p>
            {props.age !== undefined && <p>Age: {props.age}</p>} {/* Ẩn dòng nếu không truyền */}
            {props.compony !== undefined && <p>compony: {props.compony}</p>} {/* Ẩn dòng nếu không truyền */}
        </div>
    );
}