const express = require('express');

const Tasks = require('./tasks-model');

const router = express.Router();

router.post('/', (req, res) => {
	const TaskData = req.body;

	Task.addTask(TaskData)
		.then((newTask) => {
			res.status(201).json(newTask);
		})
		.catch((err) => {
			res.status(500).json({
				message:
					'An error occurred while trying to add the Task to the database',
				error: err,
			});
		});
});

router.get('/', (req, res) => {
	Task.getTasks()
		.then((tasks) => {
			res.json(tasks);
		})
		.catch((err) => {
			res.status(500).json({
				message:
					'An error occurred while trying to get the tasks from the database.',
				error: err,
			});
		});
});

router.get('/:id', (req, res) => {});

module.exports = router;
