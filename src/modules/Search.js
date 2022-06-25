import React from 'react'
import './home.css'
import Error from  './Error'
import Alldone from './Alldone';
export default function Search(props) {
  // const result = data.articles
  
  const [loading,setLoading] = React.useState(true)

  
  function getDate(d){
    let det = new Date(d);
    return `${det.getUTCDate()}-${det.getUTCMonth()}-${det.getUTCFullYear()}`
  }
  const [result,setData] =  React.useState([])
  const [error,setError] = React.useState(false)
  const[done,setDone]= React.useState(false)
  
  
    function fetchApi(){
         console.log("i m called")
         
        fetch(`https://newsapi.org/v2/top-headlines?q=${props.q}&sortBy=publishedAt&apiKey=b2af6cbccdb34b4e924add9d31ef4f89`)
        .then(result=>result.json())
        .then( result=>{
        if(result.status==="error") 
        {setError(true);
          return
        }
         setData(result.articles);
         setLoading(false);
         console.log(result.articles)
        
        })
        .catch((err)=>{ 
         console.log(err)
        })
}
    
    React.useEffect(()=>{
      fetchApi();
      props.setClick(false)
    },[props.Clicked])
  const news = result.map((i)=>{
    return (
    <div className="container">

     
<div className="content">
  <div className="headline m-5">
    <div className="line">{i.title}    
    
    <div className="source">
      {i.author===null?'by anonymous':`by ${i.author}`} . {
        
        getDate(i.publishedAt)
      
      
      }          
  
    </div>
    
  </div>
  </div>

  <div className="description m-5">
    {i.description===null?" ": i.description}

  </div>
  <div className="read ">
    <button> <a href={`${i.url}`}> <img src="https://img.icons8.com/ffffff/link--v1.png" className='linkimg'/>
     View Full Coverage </a> </button>
  </div>
</div>
<div className="image"> 
        <img src={`${i.urlToImage}`} alt="" srcset="" />
</div>

</div>
    )
  })
  const news_mob =  result.map((i)=>{
    return (
      <div className="container">
      <div className="image"> 
              <img src={`${i.urlToImage}`} alt="" srcset="" />
      </div>
     
      <div className="content">
        <div className="headline m-5">
          <div className="line">{i.title} 
          
          <div className="source">
            {i.author===null?'by anonymous':`by ${i.author}`} . {
              
              getDate(i.publishedAt)
            
            
            }          
        </div>
          </div>
          
        </div>
      
        <div className="description m-5">
          {i.description===null?" ": i.description}
      
        </div>
        <div className="read ">
          <button> <a href={`${i.url}`}> <img src="https://img.icons8.com/ffffff/link--v1.png" className='linkimg'/>
           View Full Coverage </a> </button>
        </div>
      </div>
      
      
      </div>
    )
  })

  if(loading===false && error===false){
    if(result.length===0)
    {
      return(
        <Alldone/>
      )
    }
  return (
    <div className='home'>
      <div className="wrapper">

         <div className="head">
          Headlines
        </div>
      
        <section id='laptop-view'>
{news}

        </section>
        <section id='mobile-view'>
{news_mob}

        </section>

  </div>
</div>
  )
    }
    else if(error===false && loading=== true) return (
      <div className="load">
        <h1>Loading</h1>
      </div>
    )
    else if(error=== true)
    {
      return(
        <Error/>
      )
    }
}
