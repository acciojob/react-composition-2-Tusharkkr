import React, { useState } from "react";

let Modal = ({ setFlag }) => {


    return (
        <div style={{height: '100vh'}}>
            <div className="model-overlay" onClick={(e) => setFlag(false)}>
            <button className="model-close" onClick={(e) => setFlag(false)}>Close</button>
            <p className="model-p">This is the content of the modal.</p>
        </div>
        </div>
    )
}

export default Modal

{/* <div style={{height:'100vh'}} onClick={(e)=> setFlag(false)}>
            {flag && <div className="model-overlay">
                <button className="model-close" onClick={(e)=> setFlag(false)}>Close</button>
                <p className="model-p">This is the content of the modal.</p>
            </div>}
        </div> */}