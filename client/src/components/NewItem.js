import React from 'react';
import UseForm from '../hooks/useForm';
import S3FileUpload from 'react-s3';

const NewItem = () => {

    
    // const [ url, setURL ] = UseS3();
    const [ data, setData ] = UseForm();
    const URL = 'http://localhost:3001/main';

    const config = {
        bucketName: process.env.REACT_APP_BUCKET,
        region: 'us-west-1',
        accessKeyId: process.env.REACT_APP_KEY,
        secretAccessKey: process.env.REACT_APP_SECRET
    }

    const upload = (event) => {
        console.log(event.target.files[0])
        S3FileUpload
        .uploadFile(event.target.files[0],config)
        .then((response) => {
            console.log(response);
            document.querySelector("#urlforimage").value = response.location;
        })
        .catch(err => console.log(err))
    }

    const createItem = async (e) => {
        data.imageurl = document.querySelector("#urlforimage").value;
        e.preventDefault()
        try {
            const res = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            });
            console.log(res);
            document.querySelector("#urlforimage").value = ""; //clear form after submit
        } catch (err) {
            console.error(err.message)
        }
    }

   

    // const conditionOptions = [ 'New' , 'Used'];

    // const createItem = (e) => {
    //     e.preventDefault()
    //     axios
    //     .post(URL, data)
    //     .then((res) => {
    //       window.location.reload();
    
    //     })
    //     console.log(e);
    //   }

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
                        required 
                    />
                </div>

                <div className="form-group col-md-4">
                    <label>Condition</label>
                        <select id="condition" className="form-control" name="condition" onChange={setData} required >
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
                        // defaultValue={data ? data.imageurl : ""} 
                        // style={{display : "none"}}
                        onChange={setData}/>
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
                        required
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
                        required 
                    />
                </div>
                </div>

                <input type="submit" className="btn btn-primary" />
            </form>

        </div>
    )
}

export default NewItem;
