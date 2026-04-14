import React, { useState } from "react";

let Modal = ({flag,setFlag}) => {


    return (
        <div>
            {flag && <div className="model-overlay">
                <button className="model-close" onClick={(e)=> setFlag(false)}>Close</button>
                <p className="model-p">This is the content of the modal.</p>
            </div>}
        </div>
    )
}

export default Modal 