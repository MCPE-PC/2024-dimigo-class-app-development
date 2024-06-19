import express from 'express';
import Movie from '../../models/movie';

const router = express.Router();

router.put('/movies/:id', async (request, response) => {
	const id = parseInt(request.params.id);
	const { title, director, year } = request.body;
	const movie = await Movie.findOne({ id: id });
	if (movie) {
		movie.title = title;
		movie.director = director;
		movie.year = year;
		await movie.save();
		response.json(movie);
	} else {
		response.status(404).json({ error: 'Not Found' });
	}
});

export default router;
