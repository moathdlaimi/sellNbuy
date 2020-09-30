import React from 'react';
import UseForm from '../hooks/useForm';


const NewItem = () => {

    const [ data, setData ] = UseForm();
    const URL = 'http://localhost:3001/main';

    const createItem = async (e) => {
        e.preventDefault()
        try {
            const body = { data }
            const res = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(body)
            });
            console.log(res);
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div className="container">
            <h3>New Item</h3>
            
            <form onSubmit={createItem}>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title" 
                        defaultValue={data ? data.title : ""}
                        onChange={setData} 
                    />
                </div>

                <div className="form-group col-md-4">
                    <label>Condition</label>
                        <select id="condition" className="form-control" onChange={setData}  defaultValue={data ? data.condition : ""} >
                        <option defaultValue="new" >Choose...</option>
                        <option defaultValue="new">New</option>
                        <option defaultValue="like new">Like New</option>
                        <option defaultValue="excellent">Excellent</option>
                        <option defaultValue="good">Good</option>
                        <option defaultValue="fair">Fair</option>
                        <option defaultValue="salvage">Salvage</option>
                        </select>
                </div>

                <div className="form-group col-md-6">
                    <label>Photos</label>
                    <input 
                        type="file"
                        name="imageurl" 
                        multiple
                        defaultValue={data ? data.imageurl : ""}
                        onChange={setData} 
                    />
                </div>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        className="form-control" 
                        name="description"  
                        rows="3"
                        defaultValue={data ? data.description : ""}
                        onChange={setData}
                    ></textarea>
                </div>

                <div className="form-row">
                <div className="form-group col-md-2">
                    <label>Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        className="form-control"  
                        defaultValue={data ? data.price : ""}
                        onChange={setData} 
                    />
                </div>
                </div>

                <input type="submit" className="btn btn-primary" />
            </form>

        </div>
    )
}

export default NewItem;
