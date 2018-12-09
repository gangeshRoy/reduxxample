import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postAction";
class postForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <h1> Add post</h1>

        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
            <br />
            <button type="submit" name="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
postForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

postForm.defaultProps = {};

export default connect(
  null,
  { createPost }
)(postForm);
