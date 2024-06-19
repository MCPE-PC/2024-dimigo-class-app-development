import express from 'express';
import Movie from '../../models/movie';

const router = express.Router();

router.post('/movies', async (request, response) => {
	const { title, director, year } = request.body;
	const id = (await Movie.countDocuments()) + 1;
	const newMovie = new Movie({
		id,
		title,
		director,
		year,
		createdAt: new Date(),
	});
	await newMovie.save();
	response.status(201).json(newMovie);
});

export default router;
