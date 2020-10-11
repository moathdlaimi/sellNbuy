import React, { useState,useEffect } from 'react';


const Item = () => {
    const [ data, setData ] = useState([])
    const URL = 'http://localhost:3001/main/1'

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
        <div>
            
            {
            data ? data.map((item,index) => {
            return <div key={index} className="items-container">
                    <img src={item.imageurl} alt="item" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <h4>${item.price}</h4>
            </div>
            }) : null 
            }

        </div>
    )
}

export default Item;