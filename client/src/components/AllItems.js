import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../css/App.css';
import Navigation from './Navigation.js';


const AllItems = () => {
    const [ data, setData ] = useState([])
    const URL = 'http://localhost:3001/main';
  
    // useEffect(() => {
    //   async function fetchData(){
    //     const res = await fetch(URL)
    //     res
    //     .json()
    //     .then(res => setData(res))
    //     .catch(err => console.log(err))
    //   }
    //   fetchData();
    // });
    
     function fetchData(){
      return fetch(URL)
      .then(res => res.json());
    }
  
    useEffect(() => {
      fetchData()
      .then(setData)
      .catch(err => console.log(err))
    },[]);
    
  
    return (
      <>
      <Navigation /> 
            <div className="app-main-container">
             
      {
        data ? data.map((item,index) => {
          return <div key={index} className="items-container">
                  <img src={item.imageurl} alt="item" />
                  <h3> <Link to={"/Item/"+item.id}>{item.title}</Link></h3>
                  <h4>${item.price}</h4>
          </div>
        }) : null 
      }     
    </div>
  </>  

    );
}

export default AllItems;
