import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SearchCrit from "./SearchCrit";
import SearchEnd from "./SearchEnd";


class Searching extends Component {
    
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

  
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }


    handleFormSubmit = event => {
        event.preventDefault();

        API.getDaGoogle(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                 
                    let results = res.data.items
                 
                    results = results.map(result => {
                        
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        
        event.preventDefault();
        console.log(this.state.books)
        let bookData = this.state.books.filter(book => book.id === event.target.id)
        bookData = bookData[0];
        API.saveBook(bookData)
            .then(this.setState({ message: alert("Book Saving: Complete") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white cat">(React) Google Book Search</h1>
                    <h3>Search for and Save Books of Interest</h3>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchCrit
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    
                    <SearchEnd books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default Searching;