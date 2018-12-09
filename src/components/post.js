import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";
class post extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       posts: []
  //     };
  //   }
  //   componentWillMount() {
  //     fetch("http://jsonplaceholder.typicode.com/posts")
  //       .then(res => res.json())
  //       .then(data => this.setState({ posts: data }));
  //   }
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postsItem = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return <div>{postsItem}</div>;
  }
}
post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

post.defaultProps = {};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(post);
