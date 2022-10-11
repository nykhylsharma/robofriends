import React from "react";
import 'tachyons';

const Scroll = (props) =>{
    return(
        <div className="center" style={{overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
            {props.children}
        </div>
    )
}

export default Scroll