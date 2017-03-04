
import React, { DOM } from 'react';
import _ from 'lodash';
import BlogItem from '../ui/BlogItem';

export default class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props;

    return (
      React.createElement(
        'div',
        null,
        _.map(
          posts,
          (post, key) => (
            React.createElement(
              BlogItem,
              {key, post}
            )
          )
        )
      )
    )
  }
};
