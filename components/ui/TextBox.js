
import React from 'react'

class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      React.createElement(
        'span',
        {},
		this.props.str
      )
    );
  }
}

export default TextBox;
