import React, {  useState, memo } from "react";

function Loader() {
    const [loadingMessage, setLoadingMessage] = useState("Loading...");
    

    return (
        <div data-testid = "loader">
            <button style={{ marginTop: 60, padding: 20, fontSize: 30 }} className="btn btn-warning">
                {loadingMessage}
                <span className="spinner-grow spinner-grow-sm"></span>
            </button>
        </div>
    );
}
export default memo(Loader);
