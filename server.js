const express = require('express');
const resourcesRouter = require('./route/resource-router');
const projectRouter = require('./route/projects-router');
const tasksRouter = require('./route/tasks-router');

const db = require('./data/db-config');

const server = express();
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
	res.send('it works');
});

module.exports = server;
