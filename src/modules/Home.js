import React from 'react'
import Error from './Error';
import './home.css'
export default function Home(props) {
 
  
  const [loading,setLoading] = React.useState(true)

  
  function getDate(d){
    let det = new Date(d);
    return `${det.getUTCDate()}-${det.getUTCMonth()}-${det.getUTCFullYear()}`
  }
  const [res,setData] =  React.useState([])
  
  const [error, setError]=  React.useState(false)
  
  React.useEffect(()=>{


      if(props.q!==' ')
      {
        console.log("i m called")
        fetch(`https://newsapi.org/v2/top-headlines?q=${props.q}&sortBy=publishedAt&apiKey=b2af6cbccdb34b4e924add9d31ef4f89`)
        .then(res=>res.json())
        .then( res=>{
          if(res.status==="error")
          {
            setError(true)
            return
          }
         setData(res.articles);
         setLoading(false);
         console.log(res.articles)
        
        })
        .catch((err)=>{ 
         console.log(err)
        })
        
      }
       if(props.category!==' ' ){
       fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country==='in'?'in':'us'}&apiKey=b2af6cbccdb34b4e924add9d31ef4f89`)
       .then(res=>res.json())
       .then( res=>{
        if(res.status==="error")
        {
          setError(true)
          return
        }
        setData(res.articles);
        setLoading(false);
        console.log(res.articles)
       
       })
       .catch((err)=>{ 
        console.log(err)
       })
      }
      else if( props.category=== ' ' && props.q===' ' ) {
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country==='in'?'in':'us'}&apiKey=b2af6cbccdb34b4e924add9d31ef4f89`)
        .then(res=>res.json())
        .then( res=>{
          if(res.status==="error")
          {
            setError(true)
            return
          }
         setData(res.articles);
         setLoading(false);
         console.log(res.articles)
        
        })
        .catch((err)=>{
         console.log(err)
        })
      }
 
       
      
 
  },[props])
  const news = res.map((i)=>{
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
  const news_mob =  res.map((i)=>{
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
    else if(loading===true && error===false){
     return (
      <div className="load">
        <h1>Loading</h1>
      </div>
    )
     }
     else if( error===true)
     {
      return (
        <div className="home">
          <div className="wrapper">
            <Error/>
          </div>
        </div>
      )
     }
}
