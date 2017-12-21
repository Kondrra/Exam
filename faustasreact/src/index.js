import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from "./Navigation/NavigationComponent";
//import {ProductListContainer} from "./ProductList/ProductListContainer";
//import {AdminContainer} from "./ProductList/AdminContainer";
//import {ProductAdministrationContainer} from "./ProductAdministration/ProductAdministrationContainer";
//import {ProductDetailsContainer} from "./ProductDetails/ProductDetailsContainer";
//import CartContainer from "./Cart/CartContainer";
//import {ProductEditComponent} from "./ProductAdministration/ProductEditComponent";

import {injector} from 'react-services-injector';
//import services from './services';

injector.register(services);

ReactDOM.render((
        <BrowserRouter>
            <div className="container">
                <NavigationComponent />
                <Switch>
                    <Route exact path="/" component={BookListContainer} />
                    <Route exact path="/books/:id" component={BookDetailsContainer} />
                    <Route exact path="/books" component={BookListContainer} />
                    <Route exact path="/admin/books/new" component={BookAdministrationContainer} />
                    <Route exact path="/admin" component={AdminContainer} />
                    <Route exact path="/admin/books/:id" component={BookEditComponent} />
//*<Route path="/cart-details" component={CartContainer} />*//
                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root'));