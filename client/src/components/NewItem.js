import React from 'react';

const NewItem = () => {
    return (
        <div className="container">
            <h3>New Item</h3>
            <form>
                <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" />
                </div>

                <div class="form-group col-md-4">
                    <label for="condition">Condition</label>
                        <select id="condition" class="form-control">
                        <option selected>Choose...</option>
                        <option>New</option>
                        <option>Like New</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Salvage</option>
                        </select>
                </div>

                <div class="form-group col-md-6">
                    <label for="photo">Photos</label>
                    <br />
                    <input type="file" id="photo" name="photo" multiple />
                </div>
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" rows="3">Details about the item</textarea>
                </div>

                <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="price">Price</label>
                    <input type="number" class="form-control" id="price" />
                </div>
                </div>
                    <button type="submit" class="btn btn-primary">Upload</button>
            </form>

        </div>
    )
}

export default NewItem;
