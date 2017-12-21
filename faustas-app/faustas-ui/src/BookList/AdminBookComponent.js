import React from 'react';
import axios from 'axios';

const styles = {
    color: 'green'
}

export var AdminProductComponent = (props) => {
    var {id, image, title} = props;

    var handleClick = (event) => {
        props.history.push('/admin/books/' + id);
        event.preventDefault();
    };

    var handleRemove = (event) => {
        props.remove(event.target.id);
        axios.delete('http://localhost:8080/api/admin/books/' + event.target.id)
            .then(response => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <tr>
            <td>{id}</td>
            <td><img src={image} alt="" width="50"/></td>
            <td><a onClick={handleClick}>{title}</a></td>
            <td><span id={id} className="glyphicon glyphicon-remove" style={styles} onClick={handleRemove}></span></td>
        </tr>
    );

};