import express from 'express';
const app = express();
const port = 3000;

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

app.get('/', (req, res) => {
	res.send('Hello World!!!!!');
});

app.get('/feed', async (req, res) => {
	const posts = await prisma.post.findMany({
	  where: { published: true },
	  include: { author: true },
	});
	res.json(posts)
});

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});