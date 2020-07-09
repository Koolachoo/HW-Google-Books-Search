import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container} from "../components/Grid";
import SaveFinal from "../pages/SaveFinal"

class Saving extends Component {
    state = {
        bookData: []
    };

    
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ bookData: res.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SaveFinal bookData={this.state.bookData} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default Saving