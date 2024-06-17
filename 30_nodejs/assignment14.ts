import express from 'express';

let movies: { id: number; title: string; director: string }[] = [];

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
	const { title, director } = request.body;
	const id = movies.length + 1;
	const newMovie = { id, title, director };
	movies.push(newMovie);
	response.status(201).json(newMovie);
});

app.put('/movies/:id', (request, response) => {
	const id = parseInt(request.params.id);
	const { title, director } = request.body;
	const movie = movies.find((m) => m.id === id);
	if (movie) {
		movie.title = title;
		movie.director = director;
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
