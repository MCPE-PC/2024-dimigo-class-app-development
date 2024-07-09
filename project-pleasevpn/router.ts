import { Readable } from 'stream';
import express, { type Request } from 'express';
import { originPathnameModel } from './model.js';

const router = express.Router();

const persuade = () => {
	return ['안 돼', '안 바꿔줘', '돌아가', '안돼', '안바꿔줘', '빨리 돌아가'][
		Math.floor(Math.random() * 5)
	];
};

const urlOf = (request: Request) => request.url.replace(/^\/\w+\//, '');

const normalize = (url: string) => {
	const urlInstance = new URL(url);

	return urlInstance.origin + urlInstance.pathname;
};

router.head('/god', async (request, response) => {
	response
		.header(
			'X-Result',
			encodeURIComponent(JSON.stringify(await originPathnameModel.find()))
		)
		.end();
});

router.patch('/please/*', async (request, response) => {
	const url = normalize(urlOf(request));

	const originPathname = await originPathnameModel.findOne({
		originPathname: url,
	});

	if (originPathname === null) {
		await originPathnameModel.create({
			originPathname: url,
			enabled: true,
			lockRemainder: 0,
			createdAt: new Date(),
		});

		return response.status(201).json({ message: '고맙습니다.' });
	}

	if (!originPathname.enabled) {
		await originPathname.updateOne({ $inc: { lockRemainder: -1 } });

		if (originPathname.lockRemainder === 0) {
			await originPathname.updateOne({ enabled: true });
			return response.status(200).json({ message: '바꿔줬어.' });
		}

		if (originPathname.lockRemainder) {
			if (originPathname.lockRemainder > 5) {
				return response.status(400).json({ message: persuade() });
			} else {
				return response
					.status(200)
					.json({ message: `${originPathname.lockRemainder}번 더.` });
			}
		}
	}

	await originPathname.updateOne({ enabled: true });

	response.status(400).json({ message: '귀찮게 하네' });
});

router.all('/do/*', async (request, response) => {
	const realUrl = urlOf(request);
	const url = normalize(realUrl);

	let originPathname = await originPathnameModel.findOne({
		originPathname: url,
	});

	if (originPathname === null) {
		originPathname = await originPathnameModel.create({
			originPathname: url,
			enabled: false,
			lockRemainder: Math.floor(Math.random() * 11) + 5,
			createdAt: new Date(),
		});
	}

	if (!originPathname.enabled) {
		return response.status(400).end();
	}

	const result = await fetch(realUrl);

	response.status(result.status);

	if (result.body === null) {
		return response.end();
	}

	Readable.fromWeb(result.body as any).pipe(response);
});

export default router;
