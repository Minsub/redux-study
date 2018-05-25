import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../actions';
const propTypes = {

}

const defaultProps = {

}

class Post extends Component {

  componentWillMount() {
    console.log("componentWillMount");
//    this.props.handleGetPostAll();
    this.props.getPostAll();
  }

  render() {
  	const { post } = this.props;
    console.log(post);
    return (
      <div>
        <p>{post.size}</p>
      </div>
    );
  }
}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

const mapStateToProps = (state) => {
	// if not use this -> this.props.store.getState().counter.number
	return {
		post: state.post
	};
}

const mapDispatchToProps = (dispatch) => {
	 return bindActionCreators(actions, dispatch);
//	return {
//		handleGetPostAll: () => { dispatch(actions.getPostAll()) }
//	 	handleDecrement: () => { dispatch(actions.decrement()) },
//	 	handleSetColor: (color) => { dispatch(actions.setColor(color)) }
//	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
