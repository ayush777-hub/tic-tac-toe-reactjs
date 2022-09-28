import React from "react";
import Tiles from "./Tile";
function Board(props) {
    const boardstate = props.Boardconfig;
    let BuildBoard  = boardstate.map((element,index)=>{
        return <Tiles state={element} key={index} tileid = {index} Handlenewentry = {props.Handlenewentry} />;
    });
    BuildBoard = [BuildBoard.slice(0,3),BuildBoard.slice(3,6),BuildBoard.slice(6,9)]
    BuildBoard = BuildBoard.map((arr,index)=>{
        return (
            <div className="tilegroup" key={index}>
                {arr[0]}
                {arr[1]}
                {arr[2]}
            </div>
        )
    });
    return (
        <div className="container-fluid" style={{display:'flex', justifyContent:'center',alignItems:'center'}}>

            <div className="m-5 col-5 board" style={{border:"5px", borderBlockColor:'white', borderStyle:'solid', padding:'2px'}}>
                    {BuildBoard}
            </div>
        </div>
    );

}

export default Board;