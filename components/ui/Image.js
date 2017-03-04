
import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const image = this.props.image;
    return (
      React.createElement(
        'img',
        {src: image.src,
         width: image.width,
         height: image.height,
         alt: image.alt}
      )
    );
  }
}

export default Image;
