const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!!!!!');
});

app.get('/json', (req, res) => {
	res.json({user: 'wnoth', created_at: '2020-11-03'});
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});