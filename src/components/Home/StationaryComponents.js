import React, { memo } from "react";
import Buttons from "./Buttons";



function StationaryComponents(props) {
    
        return (
            <div>
                <br />
                <Buttons changePage={props.changePage} />
            </div>
        );
    
}

export default memo(StationaryComponents);
