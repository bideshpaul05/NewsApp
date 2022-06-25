import React from 'react'
import './nav.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Menubar(props) {
  function search(e)
  {
    console.log(e);
  }
  return (
    <div className="sub-menu"
    style={{
     transform:props.hide?`translate(${-100}%)`:`translate(${0}%)`
    }}
    >

     {/*  <div className="topic">
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/globe--v2.png"/>
          </div>
          <div className="content" onClick={e=>search(e.target.textContent)}>
              Top Stories
          </div>
          
        </div> 

        </Link>    */}
        
        <div className="  hid">
          <div className="logo-bar">
        <Link to="/"> 
            NEWSBASE
        </Link>
          </div>
        </div>
        <div className="topic">
          

       <Link to="/covid" style={{textDecoration: 'none',display:'inherit', color:'inherit'}}> 
      
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/veterinary-medicine--v3.png"/>
          </div>
          <div className="content">
            COVID 19
         
        </div> 
        </Link>
        </div>
       <div className="topic">
       <Link to="/"style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/flag--v1.png"/>
          </div>
          <div className="content">
              India
          </div>
       </Link>
        </div>
        <div className="topic">
       <Link to="/world"style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/globe-asia.png"/>
          </div>
          <div className="content">
              World
          </div>
       </Link>
        </div>
        <div className="topic">
       <Link to="/buissness"style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/business.png"/>
          </div>
          <div className="content">
              Buissness
          </div>
       </Link>
        </div>
        <div className="topic">
       <Link to="/technology"style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/video-stabilization.png"/>
          </div>
          <div className="content">
              Technology
          </div>
       </Link>
        </div>
        <div className="topic">
       <Link to="/entertainment"style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/netflix-desktop-app.png"/>
          </div>
          <div className="content">
              Entertainment
          </div>
       </Link>
        </div>
        <div className="topic">
       <Link to="/sports"style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/discus-throw.png"/>
          </div>
          <div className="content">
              Sports
          </div>
       </Link>
        </div>
        <div className="topic">
       <Link to="/science"style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/flying-motarboard.png"/>
          </div>
          <div className="content">
            Science
          </div>
       </Link>
        </div>
        <div className="topic">
       <Link to="/health"style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
          <div className="icon">
          <img src="https://img.icons8.com/ffffff/heart-health.png"/>
          </div>
          <div className="content">
              Health
          </div>
       </Link>
        </div>
       

        
    </div>
  )
}
