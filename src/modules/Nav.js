import React from 'react'
import './nav.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Nav(props) {

  function Hide()
  {
    props.setHide(!props.hide)
  }
  function handleChange(e)
  {
    // e.preventDefault();

      props.setQuestion(e.target.value)
    // e.target.value="";
  }
  function handleClick()
  {
    props.setClick(!props.clicked)
  }
  return (
    <>
    
    
    <div className='nav'>
        
        <div className="menu" onClick={Hide}>
        <img src="https://img.icons8.com/ios-filled/50/undefined/menu--v1.png" alt="menu" srcSet=''/>
        </div>
        <div className="logo">
            NEWSBASE
        </div>
        <form className="searchfield">
          <Link to='/NewsApp/q' style={{textDecoration: 'none',display:'inherit', color:'inherit'}}>
            <button className='search-btn' >

                  <img src="https://img.icons8.com/ecf0f1/search" alt="" srcset=""  onClick={handleClick}/>
            </button>
          </Link>
        <input type="text"placeholder='find news on country,company,person' onChange={(e)=>handleChange(e)}/>
        </form>
        
    </div>
    
    </>
  )
}
