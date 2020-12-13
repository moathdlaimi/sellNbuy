import React from 'react';
import UseForm from '../hooks/useForm';
import S3FileUpload from 'react-s3';
import Navigation from './Navigation.js';
import { useParams, useHistory } from 'react-router-dom';



const EditItem = () => {
    const params = useParams();
    // console.log(params);
    const history = useHistory();
    
    const [ data, setData ] = UseForm([]);
    const URL = `http://localhost:3001/main/${params.id}`;

    const config = {
        bucketName: process.env.REACT_APP_BUCKET,
        region: 'us-west-1',
        accessKeyId: process.env.REACT_APP_KEY,
        secretAccessKey: process.env.REACT_APP_SECRET
    }
    
      const upload = (event) => {
          // console.log(event.target.files[0])
          S3FileUpload
          .uploadFile(event.target.files[0],config)
          .then((response) => {
              console.log(response);
              document.querySelector("#urlforimage").value = response.location;
          })
          .catch(err => console.log(err))
      }

      const updateItem = async (e) => {
        data.imageurl = document.querySelector("#urlforimage").value;
        e.preventDefault()
        try {
            const res = await fetch(URL, {
                method: "PUT",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            });
            console.log(res);
            // document.querySelector("#urlforimage").value = ""; //clear form after submit
            document.querySelector("#title").value = "";
            document.querySelector("#description").value = "";
            document.querySelector("#price").value = "";
            history.push(`/Item/${params.id}`);
            
        } catch (err) {
            console.error(err.message)
        }
    }



    return (
        <div>
         <Navigation /> 
         <div className="container">
         <h3>Edit Item</h3>
            <form  onSubmit={updateItem} id="clearForm">
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Title</label>
                    <input
                        id="title" 
                        type="text" 
                        name="title" 
                        defaultValue={data ? data.title : ""}
                        onChange={setData}
                        required 
                    />
                </div>

                <div className="form-group col-md-4">
                    <label>Condition</label>
                        <select  id="condition" className="form-control" name="condition" onChange={setData} required >
                            <option value="new" >Choose...</option>
                            <option value="new">New</option>
                            <option value="like new">Like New</option>
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                            <option value="salvage">Salvage</option>
                        </select>
                </div>

                <div className="form-group col-md-6">
                    <label>Photos</label>
                    <input
                        type="file"
                        onChange={upload}/>
                </div>
                
                <div className="form-group col-md-6">
                    <input
                        type="text"
                        name="imageurl"
                        id="urlforimage"  
                        style={{display : "none"}}
                        onChange={setData}/>
                </div>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        className="form-control" 
                        id="description"
                        name="description"  
                        rows="3"
                        defaultValue={data ? data.description : ""}
                        onChange={setData}
                        required
                    ></textarea>
                </div>

                <div className="form-row">
                <div className="form-group col-md-2">
                    <label>Price</label>
                    <input 
                        id="price"
                        type="number" 
                        name="price" 
                        className="form-control"  
                        defaultValue={data ? data.price : ""}
                        onChange={setData}
                        required 
                    />
                </div>
                </div>

                <input type="submit" className="btn btn-primary" />
            </form>
            </div>  
        </div>
    );
}

export default EditItem;
