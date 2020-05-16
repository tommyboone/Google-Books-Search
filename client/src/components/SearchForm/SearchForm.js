import React from "react";
import './style.css'

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <div className="col col-md-4"></div>
            <div className="col col-md-4">
                  <h3>Book Search</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required/>
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
            </div>
          
        </div>
    );
}

export default SearchForm;