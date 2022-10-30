import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

class Home extends Component {
	render() {
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.map((post) => (
				<div className="post card" key={post.id}>
					<img src="pokeball.png" alt="" />
					<div className="card-content">
						<Link to={`/${post.id}`}>
							<span className="card-title red-text">{post.title}</span>
						</Link>
						<p>{post.body}</p>
					</div>
				</div>
			))
		) : (
			<div className="center">No posts yet!</div>
		);
		return (
			<div className="container home">
				<h4 className="center">Home</h4>
				<div className="container">{postList}</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Home);
