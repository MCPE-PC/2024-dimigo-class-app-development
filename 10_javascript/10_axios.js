// 10. Axios

import axios from 'axios';

const getUsers = async () => {
	try {
		console.log('작업 전');

		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);

		console.log(response.data);

		console.log('작업 끝');
	} catch (error) {
		console.error(error);
	}
};
