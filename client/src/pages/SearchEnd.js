import React from "react";

import {Row, Col} from "../components/Grid"

const SearchEnd = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div >
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body ">
                    <div >
                        <h3>Search Results</h3>
                        {props.books.map(book => {
                            return (
                                <li >
                                    <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                      
                                        <Col size="2" >
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                   
                                        <Col size="9" >
                                            <Row>
                                                <h3 >{book.title}</h3>
                                            </Row>
                                            <Row>
                                                <h4 >{book.author}</h4>
                                            </Row>
                                            <Row>
                                                <p >{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save
                                        </button>
                                        <a href={book.link} target="_blank">
                                            <button className="btn btn-success">
                                                View
                                        </button>
                                        </a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchEnd