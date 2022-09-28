import React, { useState } from 'react'
import lm from '../lightmode.png'
import nm from '../moon.png'
function Navbar(props) {
    let mode = props.Mode;
    function HandleModeClick(e) {
        e.preventDefault();
        props.PageMode(mode);
    }
    return (
        <nav className={`navbar navbar-expand-lg bg-${mode.cur_mode==='dark'?'secondary':'light'}`} >
        <div className="container-fluid" style={{color:mode.style.color}}>
            <a className="navbar-brand" href="/" style={{color:mode.style.color}}><b><i>TIC-TAC-TOE</i></b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent" >
            <div style={{position:'absolute', right:0}}>
            <form className="d-flex" role="search" >
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
                <img className='mx-3' src={mode.cur_mode==='light'? lm:nm} width="30px" height="30px" onClick={(e)=> HandleModeClick(e) }></img>
            </form>
            </div>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;