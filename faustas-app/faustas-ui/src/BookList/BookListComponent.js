import React from 'react';
import {BookCardComponent} from "./BookCardComponent";
export var ProductListComponent = (props) => {
    const bookss = props.books.map((book, index) => {
        var bookComponent = <BookCardComponent
            key={index}
            id={book.id}
            title={book.title}
            image={book.image}
            author={book.author}
            numberofpages={book.numberofpages}
            history={props.history}
        />;
        return (
            bookComponent
        );
    });

    return (
        <div className="row">
            {bookss}
        </div>
    );
};