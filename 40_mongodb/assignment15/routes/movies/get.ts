import express from 'express';
import Movie from '../../models/movie';

const router = express.Router();

router.get('/movies', async (_, response) => {
	const movies = await Movie.find();
	response.json(movies);
});

router.get('/movies/:id', async (request, response) => {
	const id = parseInt(request.params.id);
	const movie = await Movie.findOne({ id: id });
	if (movie) {
		response.json(movie);
	} else {
		response.status(404).json({ error: 'Not Found' });
	}
});

export default router;
