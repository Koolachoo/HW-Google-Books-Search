import React from "react";
import "./style.css";



const SearchCrit = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearch"><h3>Book Search</h3></label>
                <br></br>
                <h4>Book</h4>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Book Entry"
                    onChange={props.handleInputChange}
                />
            </div>
            
            <button type="submit" className="submitBtn btn btn-success" onClick={props.handleFormSubmit}>
                Search
            </button>
        </form>
    )
}



export default SearchCrit;