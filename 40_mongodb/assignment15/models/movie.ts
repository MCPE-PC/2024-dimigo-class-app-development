import * as mongoose from 'mongoose';

const Movie = mongoose.model(
	'movie',
	new mongoose.Schema({
		id: Number,
		title: String,
		director: String,
		year: Number,
		createdAt: Date,
	})
);

mongoose.connect('mongodb://localhost/testDatabase');

export default Movie;
