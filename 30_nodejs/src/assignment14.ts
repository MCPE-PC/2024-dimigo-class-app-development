import express from 'express';

interface Movie {
	id: number;
	title: string;
	director: string;
	year: number;
	createdAt: Date;
}

let movies: Movie[] = [];

const app = express();
app.use(express.json());

app.get('/movies', (_, response) => {
	response.json(movies);
});

app.get('/movies/:id', (request, response) => {
	const id = parseInt(request.params.id);
	const movie = movies.find((m) => m.id === id);
	if (movie) {
		response.json(movie);
	} else {
		response.status(404).json({ error: 'Not Found' });
	}
});

app.post('/movies', (request, response) => {
	const { title, director, year } = request.body;
	const id = movies.length + 1;
	const createdAt = new Date();
	const newMovie: Movie = { id, title, director, year, createdAt };
	movies.push(newMovie);
	response.status(201).json(newMovie);
});

app.put('/movies/:id', (request, response) => {
	const id = parseInt(request.params.id);
	const { title, director, year } = request.body;
	const movie = movies.find((m) => m.id === id);
	if (movie) {
		movie.title = title;
		movie.director = director;
		movie.year = year;
		response.json(movie);
	} else {
		response.status(404).json({ error: 'Not Found' });
	}
});

app.delete('/movies/:id', (request, response) => {
	const id = parseInt(request.params.id);
	const index = movies.findIndex((m) => m.id === id);
	if (index === -1) {
		response.status(404).json({ error: 'Not Found' });
	} else {
		const deletedMovie = movies.splice(index, 1)[0];
		response.json(deletedMovie);
	}
});

const port = 3000;
app.listen(port, () => {
	console.log(port);
});
