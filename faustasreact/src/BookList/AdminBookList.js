import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AdminProductComponent} from "./AdminBookComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var AdminBookList = (props) => {

    const books = props.products.map((book, index) => {
        return (
            <AdminProductComponent
                key = {index}
                id = {book.id}
                title = {book.title}
                image = {book.author}
                history = {props.history}
                remove = {props.remove}
            />
        );
    });

    return (
        <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books}
                    </tbody>
                </table>
            </div>
        </div>
    );
};