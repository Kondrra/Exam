import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ProductAdministrationComponent} from "./BookAdministrationComponent";

export class ProductAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            author: '',
            numberofpages: 0,
            history: props.history
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        this.setState({
                [name]: value
            }
        );
    };

    handleClick = (event) => {
        const outputProduct = {
            title: this.state.title,
            image: this.state.image,
            author: this.state.author,
            numberofpages: this.state.numberofpages
        };

        axios.post("http://localhost:8081/api/admin/books/new", outputBook)

            .then((response) => {
                this.setState( {
                    title: '',
                    image: '',
                    author: '',
                    numberofpages: 0,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <ProductAdministrationComponent
                    title={this.state.title}
                    image={this.state.image}
                    author={this.state.author}
                    numberofpages={this.state.numberofpages}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}