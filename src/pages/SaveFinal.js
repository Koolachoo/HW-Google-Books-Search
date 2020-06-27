import React from "react";

import {Row, Col} from "../components/Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body ">
                <div className="article">
                    <h3>Books that You Saved</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body ">
                <div >
                    <h3>Books that You Saved</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                  
                                    <Col size="2" >
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="1" />
                                  
                                    <Col size="9" >
                                        <Row>
                                            <h2 >{savedbook.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3 >{savedbook.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p>{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete
                                    </button>
                                    <a href={savedbook.link} target="_blank">
                                        <button className="viewBook btn btn-success">
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
export default SavedResult