import React, { useState,useEffect } from 'react';
import '../css/App.css';

const AllItems = () => {
    const [ data, setData ] = useState([])
    const URL = 'http://localhost:3001/main';
  
    useEffect(() => {
      async function fetchData(){
        const res = await fetch(URL)
        res
        .json()
        .then(res => setData(res))
        .catch(err => console.log(err))
      }
      fetchData()
    });

    return (
            <div className="app-main-container">
      {
        data ? data.map((item,index) => {
          return <div key={index} className="items-container">
                  <img src={item.imageurl} alt="item" />
                  <h3>{item.title}</h3>
                  <h4>${item.price}</h4>
          </div>
        }) : null 
      }      
    </div>

    );
}

export default AllItems;
