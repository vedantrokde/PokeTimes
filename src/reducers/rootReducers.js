const initialState = {
	posts: [
		// "https://jsonplaceholder.typicode.com/posts"
		{
			id: "1",
			title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
		},
		{
			id: "2",
			title: "sea molestias quasi exercitationem repellat qui ipsa sit aut",
			body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
		},
		{
			id: "3",
			title: "qui est esse",
			body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
		},
	],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD_POST":
			console.log("ADD POST");
			return { ...state };
		case "DELETE_POST":
			const updatedPost = state.posts.filter(
				(post) => post.id !== payload
			);
			return { ...state, posts: [...updatedPost] };
		default:
			return state;
	}
};

export default rootReducer;
