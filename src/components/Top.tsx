import React from "react";
import Header from "./Header";

import redSaber from "../Images/blueLightsaber.png";

export default function Top() {
    return (
        <div>
            <header className="App-header">
                <Header />
            </header>
           
            <img src={redSaber} style={{ height: 60, width: 700 }} alt="lightsaber" />
        </div>
    );
}
