import React from "react";

type ChangeProp = {
    changePage : (type: string, number ?: number)=>void;
}

export default function Buttons({ changePage }: ChangeProp) {
    const pages = 9;
    const components = [];
    for (let i = 1; i <= pages; i++) {
        components.push(
            <button onClick={() => changePage("number", i)} className="btn btn-warning btn-outline-dark" key={i}>
                {i}
            </button>
        );
    }

    return (
        <div>
            <button onClick={() => changePage("previous")} className="btn btn-danger" style={{ width: "auto" }}>
                Previous
            </button>
            
            {components}

            <button onClick={() => changePage("next")} className="btn btn-danger" style={{ width: "auto" }}>
                Next
            </button>
        </div>
    );
}
