import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

export const fetchPosts = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(posts => {
			dispatch({
				type: FETCH_POSTS,
				payload: posts,
			});
		})
		.catch(err => console.log(err));
};

export const createPosts = (post) => dispatch => {

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(post),
	})
		.then(res => res.json())
		.then(newPost => {
			dispatch({
        type: NEW_POSTS,
        payload: newPost
      })
		})
		.catch(err => console.log(err));
};
