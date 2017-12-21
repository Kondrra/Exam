import React from 'react';
import axios from 'axios';
import {BookListComponent} from "./BookListComponent";
import SearchContainer from '../Search/SearchContainer';
import queryString from 'query-string';

export class BookListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { books: []};
    }

    componentWillMount = () => {
        axios.get('http://localhost:8080/api/books')
            .then((response) => {
                this.setState( {books: response.data} );
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    componentWillReceiveProps = (nextProps) => {
        const searchTerm = nextProps.history.location.search;
        const parsedSearchTerm = queryString.parse(searchTerm);
        if (parsedSearchTerm !== '') {
            axios.get('http://localhost:8080/api/books?search=' + parsedSearchTerm.search)
                .then(response => {
                    this.setState( {books: response.data} );
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {
        return (
            <div>
                <SearchContainer history={this.props.history}/>
                <BookListComponent books={this.state.books} history={this.props.history}/>
            </div>
        )

    }
}