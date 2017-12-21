import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ProductAdministrationComponent} from "./BookAdministrationComponent";

export class BookEditorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            author: '',
            numberofpages: 0,
            history: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/admin/books/' + this.props.match.params.id)
            .then(response => {
                const {title, image, author, numberofpages} = response.data;
                this.setState({
                    title : title,
                    image : image,
                    author: author,
                    numberofpages: numberofpages,
                    history: this.props.history
                })
            })
            .catch(error => {
                console.log(error);
            })
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
            title: this.state.title
            image: this.state.image,
            author:this.state.author,
            numberofpages: this.state.numberofpages
        };

        axios.put('http://localhost:8081/api/admin/products/' + this.props.match.params.id, outputProduct)
            .then((response) => {
                this.props.history.goBack();
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
