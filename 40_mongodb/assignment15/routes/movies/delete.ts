import express from 'express';
import Movie from '../../models/movie.js';

const router = express.Router();

router.delete('/movies/:id', async (request, response) => {
	const id = parseInt(request.params.id);
	const movie = await Movie.findOneAndDelete({ id: id });
	if (movie) {
		response.json(movie);
	} else {
		response.status(404).json({ error: 'Not Found' });
	}
});

export default router;
