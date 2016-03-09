import ReactDOM from 'react-dom';

import Products from './components/products.js';
import Details from './components/details.js';

import { Router, Route, Link } from 'react-router';

import { createHistory, useBasename } from 'history';

// basename: is the relative path from the root to the main file
const history = useBasename(createHistory)({
  basename: '/router'
})

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Products} />
    <Route path="/product/:id" component={Details} />
  </Router>,
  document.getElementById('container')
);
