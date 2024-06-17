import express from 'express';
import * as mongoose from 'mongoose';

const app = express();
app.use(express.json());

const Movie = mongoose.model(
	'movie',
	new mongoose.Schema({
		id: Number,
		title: String,
		director: String,
	})
);

mongoose.connect('mongodb://localhost/testDatabase');

app.get('/movies', async (_, response) => {
	const movies = await Movie.find();
	response.json(movies);
});

app.get('/movies/:id', async (request, response) => {
	const id = parseInt(request.params.id);
	const movie = await Movie.findOne({ id: id });
	if (movie) {
		response.json(movie);
	} else {
		response.status(404).json({ error: 'Not Found' });
	}
});

app.post('/movies', async (request, response) => {
	const { title, director } = request.body;
	const id = (await Movie.countDocuments()) + 1;
	const newMovie = new Movie({ id, title, director });
	await newMovie.save();
	response.status(201).json(newMovie);
});

app.put('/movies/:id', async (request, response) => {
	const id = parseInt(request.params.id);
	const { title, director } = request.body;
	const movie = await Movie.findOne({ id: id });
	if (movie) {
		movie.title = title;
		movie.director = director;
		await movie.save();
		response.json(movie);
	} else {
		response.status(404).json({ error: 'Not Found' });
	}
});

app.delete('/movies/:id', async (request, response) => {
	const id = parseInt(request.params.id);
	const movie = await Movie.findOneAndDelete({ id: id });
	if (movie) {
		response.json(movie);
	} else {
		response.status(404).json({ error: 'Not Found' });
	}
});

const port = 3000;
app.listen(port, () => {
	console.log(port);
});
