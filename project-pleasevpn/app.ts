import cors from 'cors';
import express from 'express';
import router from './router.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = 3000;
app.listen(port, () => {
	console.log(port);
});
