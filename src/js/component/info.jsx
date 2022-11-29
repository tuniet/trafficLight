import React from "react";
import ReactDOM from "react-dom";

const Info = () => {
    return (
        <div>
            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i className="bi bi-info-circle"></i>
            </button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    Click on the lights to make them work
                </div>
            </div>
        </div>
    );
};


export default Info