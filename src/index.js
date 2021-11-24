const express = require('express');
const app = express();
const port = 3000;

const envConfigs =  require('../config/config');
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const {Sequelize, QueryTypes} = require('sequelize');
const sequelize = new Sequelize(config.url);

app.get('/', (req, res) => {
	res.send('Hello World!!!!!');
});

app.get('/json', (req, res) => {
	res.json({user: 'wnoth', created_at: '2020-11-03'});
})

app.get('/psql', async (req, res) => {
	sequelize.authenticate()
	.then((response) => {
		console.log('Connection has been established successfully.');
	}).catch(error => {
		console.error('Unable to connect to the database:', error);
	}).finally(() => {
		sequelize.close();
	});
})

app.listen(port, () => {
	console.log(`${env} app listening at http://localhost:${port}`);
	console.log(`connecting to ${config.url}`)
});