import React from "react";


function ScoreCard(props) {
    


    return (
        <>
        <div className="card-group col-5">
        <div className="card transparent">
            <div className="card-body">
            <h1 className="card-title div-container">Player A</h1>
            <div>
            <h4 className="div-container">Number of Wins:{props.Score[0]}</h4>
            <h4 className="div-container">Number of Loss:{props.Score[1]}</h4>
            <h4 className="div-container">Number of Draws:{props.Score[2]}</h4>
            </div>
            </div>
        </div>
        <div className="card transparent">
            <div className="card-body">
            <h1 className="card-title div-container">Player B</h1>
            <div>
            <h4 className="div-container">Number of Wins:{props.Score[1]}</h4>
            <h4 className="div-container">Number of Loss:{props.Score[0]}</h4>
            <h4 className="div-container">Number of Draws:{props.Score[2]}</h4>
            </div>
            </div>
        </div>
        </div>        
        </>
    );
}


export default ScoreCard;