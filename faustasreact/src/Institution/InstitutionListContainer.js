import React from 'react';
import axios from 'axios';
import {ProductListComponent} from "./InstitutionComponent";
import queryString from 'query-string';

export class InstitutionListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { institutions: []};
    }

    componentWillMount = () => {
        axios.get('http://localhost:8080/api/institutions')
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
            axios.get('http://localhost:8080/api/products?search=' + parsedSearchTerm.search)
                .then(response => {
                    this.setState( {products: response.data} );
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
                <ProductListComponent products={this.state.products} history={this.props.history}/>
            </div>
        )

    }
}