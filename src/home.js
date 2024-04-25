import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import data from "./data/data.json";
import Header from './components/header';
import { useState } from 'react';
import Footer from './footer';
import Layout from './layout';
import mainimg from './pics/mainimg.jpg'

function Home() {

  const [dada, setDada]=useState(data)
  const [tog, setTog]=useState(false)

  // const url="http://localhost:8080"

  // let info=fetch(url, {
  //   Method: 'Get',
  //   Headers: {
  //     Accept: 'application.json',
  //     'Content-Type': 'application/json'
  //   },
  
  // })
  // console.log(info)

  // fetch(url)
  // .then(res=>res.json)
  // .then(data=>console.log([data]))
  return (

    <div className="App">
        {/* <Layout> */}

      {/* <header id="header">
        <span>
          <img src='' alt="logo"/>
        </span>
        <span>
          <h2>Hair Stylist Creations</h2>
        </span>
        <span>
            <button>Login</button>
        </span>
      </header> */}
     <Nav/>
     <Header/>
     <div id="container1">
          <span>
            <h3 style={{color:"black"}}>The best stylist in Marylary with unbeatable prices, and %100 satifaction or money back</h3>
          
          <button>Book Appointment Now</button>
          </span>
          <span>
          <img id="img" src={mainimg} alt="phot"/>
          </span>
    
     </div>
     <div id="styles">
      <button id="butt" onClick={()=>setTog(!tog)}>View Styles</button>
      {tog &&(
        <div>
            {dada.map((val)=>(
      <div>
        <h4>{val.name}</h4>
        <p>{val.price}</p>
        <p>{val.img}</p>

        </div>
    ))

    }

          </div>
      )}
  

     </div>
     {/* <footer id="footer" >
      <h3>Contact:</h3>
      <h4>Phone:012-345-6789</h4>
      <h4></h4>

     </footer> */}
     <Footer/>
     {/* </Layout> */}
    </div>
  );
}

export default Home;
