import logo from './logo.svg';
import './App.css';
import Nav from './modules/Nav'
import Menubar from './modules/Menubar';
import React from 'react'
import Home from './modules/Home'
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Search from './modules/Search';

function App() {
  const [hide,setHide]= React.useState(false)
  const [question,setQuestion]=React.useState(" ")
  const [clicked,setClick]=React.useState(false)
  console.log(question)
  console.log(clicked)
  if(clicked===false)
  {
  return (
 
   
    <div className="App">
     
      <Router>
      <Nav setHide={setHide} hide={hide} question={question} setQuestion={setQuestion} clicked={clicked} setClick={setClick}></Nav>
      <div className="main-wrapper">

      <Menubar hide={hide}></Menubar>
      <Routes>

      <Route path="/NewsApp/" element={<Home country="in" category=" " q=" "/>}> </Route>
      <Route path="/NewsApp/q" element={<Search country="in" category=" " q= {question} clicked={clicked} setClick={setClick}/>}> </Route>

      <Route path="/NewsApp/world" element={<Home country="world" category="general" q=" "/>}> </Route>
      <Route path="/NewsApp/buissness" element={<Home country="in" category="business"q=" "/>}> </Route>
      <Route path="/NewsApp/entertainment" element={<Home country="in" category="entertainment"q=" "/>}> </Route>
      <Route path="/NewsApp/sports" element={<Home country="in" category="sports"q=" "/>}> </Route> 
      <Route path="/NewsApp/covid" element={<Home country="in" category=" "q="covid-19"/>}> </Route>
      <Route path="/NewsApp/health" element={<Home country="in" category="health"q=" "/>}> </Route>
      <Route path="/NewsApp/science" element={<Home country="in" category="science"q=" "/>}> </Route>
      <Route path="/NewsApp/technology" element={<Home country="in" category="technology"q=" "/>}> </Route>
      {/* <Redirect to="/" /> */}

      {/* <Home></Home> */}
      </Routes>
      </div>
      </Router>
    </div>
  );
  }
  else 
  {
    
    return(
      <div className="App">
        <Router>

      <Nav setHide={setHide} hide={hide} question={question} setQuestion={setQuestion} clicked={clicked} setClick={setClick}></Nav>
      <div className="main-wrapper">

        <Menubar hide={hide}></Menubar>
        
       <Search country="in" category=" " q= {question} clicked={clicked} setClick={setClick}/>
       </div>
        </Router>
      </div>
    )
  }
}

export default App;
