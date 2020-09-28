import React from 'react';

const NewItem = () => {
    return (
        <div>
            <h3>New Item</h3>
            <form>
                <label for="title">Title</label>
                <input type="text" id="title" name="title"  />

                <br/>

                <label for="photo">Photo</label>
                <input type="file" id="photo" name="photo" multiple />

                <br/>

                <label for="description">Description</label>
                <textarea id="description" name="description">

                </textarea>

                <br/>

                <label for="price">Price</label>
                <input type="number" id="price" name="price"/>

                <br/>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewItem;