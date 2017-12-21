import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from "./Navigation/NavigationComponent";
import {BookListContainer} from "./BookList/BookListContainer";
import {AdminContainer} from "./BookList/AdminContainer";
import {AdministrationContainer} from "./Administration/AdminContainer";
import {BookEditorComponent} from "./Administration/BookEditorComponent";

import{injector} from "react-services-injector";
import services from './services';

injector.register(services);

ReactDOM.render((
        <BrowserRouter>
            <div className="container">
                <NavigationComponent />
                <Switch>
                    <Route exact path="/" component={BookListContainer} />
                    <Route exact path="/books" component={BookListContainer} />
                    <Route exact path="/admin/books/new" component={AdministrationContainer} />
                    <Route exact path="/admin" component={AdminContainer} />
                    <Route exact path="/admin/books/:id" component={BookEditorComponent} />
                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root'));