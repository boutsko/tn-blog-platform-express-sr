
import React from 'react'
import TextBox from './TextBox';
import Image from './Image';

var assign = require('object-assign');

class BlogItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const post = this.props;

        return  React.createElement(
            'div',
            {},
            React.createElement(
                TextBox,
                Object.assign({}, post)
            ),
            React.createElement(
                Image,
                Object.assign({}, post)
            )
        );
    }
}

export default BlogItem;
