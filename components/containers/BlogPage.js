import React, { DOM } from 'react';
import BlogList from './BlogList';
import { posts } from '../../constants/posts';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		React.createElement(BlogList, { posts })
    );
  }
}
