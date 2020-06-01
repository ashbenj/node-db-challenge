const express = require('express');

const Project = require('../route/projects-model');

const router = express.Router();

// server.use(express.json());

//add projects
router.post('/', (req, res) => {
	const projectData = req.body;

	Project.addProject(projectData)
		.then((newProject) => {
			res.status(201).json(newProject);
		})
		.catch((err) => {
			res.status(500).json({
				message:
					'An error occurred while trying to add the project to the database',
				error: err,
			});
		});
});

//retrieve projects
router.get('/', (req, res) => {
	Project.getProjects()
		.then((projects) => {
			res.json(projects);
		})
		.catch((err) => {
			res.status(500).json({
				message:
					'An error occurred while trying to get the projects from the database.',
				error: err,
			});
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Projects.getProjectById(id).then((project) => {
		if (project) {
			res.json(project);
		} else {
			res
				.status(404)
				.json({
					message: 'Could not find project with given id',
				})
				.catch((err) => {
					res.status(500).json({ message: 'Failed to get projects' });
				});
		}
	});
});

module.exports = router;
