
import React from 'react'

class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const post = this.props.post
//        console.log(post);
        return (
            React.createElement(
                'span',
                {},
                post.str
            )
        );
    }
}

export default TextBox;
