import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../actions/postActions";

export default function Post() {
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const post = useSelector((state) =>
		state.posts.find((post) => post.id === params.postId)
	);

	const postCard = post ? (
		<div className="post">
			<h4 className="center">{post.title}</h4>
			<p>{post.body}</p>
			<div className="center">
				<button
					className="btn grey"
					onClick={() => {
						dispatch(deletePost(post.id));
						navigate("../", { replace: true });
					}}
				>
					Delete Post
				</button>
			</div>
		</div>
	) : (
		<div className="center">Loading post...</div>
	);

	return <div className="container">{postCard}</div>;
}
