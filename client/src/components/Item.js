import React, { useState,useEffect } from 'react';
import Navigation from './Navigation.js';
import { useParams, useHistory } from 'react-router-dom';

const Item = () => {
    // {match} // older way to extract the params object from match like the line below
    // const params = match.params;
    const history = useHistory() // render main page after delete
    const params = useParams();
    console.log(params.id);
    
    const [ data, setData ] = useState([])
    const URL = `http://localhost:3001/main/${params.id}`
    
    function fetchData(){
        return fetch(URL)
        .then(res => res.json());
      }
    
      useEffect(() => {
        fetchData()
        .then(setData)
        .catch(err => console.log(err))
      },[]);
    
     //DELETE ITEM
    const deleteItem = () => {
      fetch(URL, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(res => console.log(res))
      history.push('/')
    }
 
    
    

    return (
        <div>
          <Navigation />
            
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
          <button onClick={deleteItem}> DELETE </button> 
        </div>
    )
}

export default Item;