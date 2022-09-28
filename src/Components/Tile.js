import React from "react";
import cross from '../cross.png';
import circle from '../circle.png';

function Tiles(props) {
    const tilestate=props.state;
    function HandleClick(e,tileid) {
        e.preventDefault();
        props.Handlenewentry(tileid);
    }
    return (
        <>
        {tilestate==='X'?
            <div className="tile">
                <img src={cross} height="90%" width="90%"/>
            </div>
        :
            (tilestate==='O'?
                <div className="tile">
                    <img src={circle} height="70%" width="70%"/>
                </div>
                :
                <div className="tile" onClick={(e)=>HandleClick(e,props.tileid)}>
                </div>
            )
        }
        </>
    );
}

export default Tiles;