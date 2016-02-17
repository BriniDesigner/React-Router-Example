import React, {Component} from 'react';

import { Link } from 'react-router';

const productsList = [
  {"id": 1, "name": "Lorem 1"},
  {"id": 2, "name": "Lorem 2"},
  {"id": 3, "name": "Lorem 3"},
  {"id": 4, "name": "Lorem 4"},
  {"id": 5, "name": "Lorem 5"},
  {"id": 6, "name": "Lorem 6"},
  {"id": 7, "name": "Lorem 7"}
];

export default class Products extends Component {

  eachProduct(product) {
    return (
      <li key={product.id}>
        <Link to={`product/${product.id}`}>{product.name}</Link>
      </li>
    );
  }

  render() {
    return (
      <div>
        <h2>Products page</h2>
        <ul>
          {productsList.map(this.eachProduct)}
        </ul>
      </div>
    );
  }
}
