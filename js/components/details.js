import React, {Component} from 'react';

import { Link } from 'react-router';

export default class Details extends Component {

  render() {
    return (
      <div>
        <pre>{`Product ID: ${this.props.params.id}`}</pre>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}
