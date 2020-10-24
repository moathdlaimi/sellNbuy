import React, { useState,useEffect } from 'react';
import Navigation from './Navigation.js';
import { useParams, useHistory, Link } from 'react-router-dom';



const Item = () => {
    // {match} // we pass {match} to Item, older way to extract the params object from match like the line below
    // const params = match.params;
    const history = useHistory() // render main page after delete
    const params = useParams();
    // console.log(params.id);
    
    const [ data, setData ] = useState([]);
    const URL = `http://localhost:3001/main/${params.id}`;
    
    // function fetchData(){
    //     return fetch(URL)
    //     .then(res => res.json());
    //   }
    
    //   useEffect(() => {
    //     fetchData()
    //     .then(setData)
    //     .catch(err => console.log(err))
    //   },[]);

    //GET ITEM 
    useEffect(() => {
      const fetchData = () => {
        return fetch(URL)
        .then( res => res.json())
        .then(setData)
        .catch( err => console.log(err))
      }
      fetchData()
    },[URL])
    

    //DELETE ITEM
    const deleteItem = () => {
      
      if(window.confirm('Are sure you want to delete this posting?')){
        fetch(URL, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => console.log(res))
        history.push('/')
      } 
        else {
        console.log('delete canceled')
        }

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

            <button type="button" className="btn btn-secondary"><Link to={"/EditItem/"+params.id}>Edit</Link></button>
            <button type="button" onClick={deleteItem} className="btn btn-danger">DELETE</button>
        </div>
       

    )
}

export default Item;