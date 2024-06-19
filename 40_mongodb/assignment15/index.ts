import express from 'express';
import movieGet from './routes/movies/get.js';
import moviePost from './routes/movies/post.js';
import moviePut from './routes/movies/put.js';
import movieDelete from './routes/movies/delete.js';

const app = express();
app.use(express.json());

app.use(movieGet);
app.use(moviePost);
app.use(moviePut);
app.use(movieDelete);

const port = 3000;
app.listen(port, () => {
	console.log(port);
});
