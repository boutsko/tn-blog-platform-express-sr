
import React from 'react'
import TextBox from './TextBox';
import Image from './Image';
import _ from 'lodash';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return  React.createElement(
      'div',
      {},
      React.createElement(
        TextBox,
        {str: post.str}
      ),
      React.createElement(
        Image,
        {image: post.image}
      )
    );
  }
}

export default BlogItem;
