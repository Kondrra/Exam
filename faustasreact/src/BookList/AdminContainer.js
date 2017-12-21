import React, {Component} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AdminProductListComponent} from "./AdminBookList";

export class AdminContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/books')
            .then((response) => {
                this.setState({books: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    newProduct = () => {
        this.props.history.push("/admin/books/new");
    };

    removeItem = (index) => {
        const goods = this.state.books.filter((book) => {
            return product.id !== parseInt(index, 10);
        });
        this.setState({ books : goods });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newProduct}>Add new product</button>
                <AdminProductListComponent products={this.state.products} history={this.props.history} remove={this.removeItem}/>
            </div>
        );
    }
}