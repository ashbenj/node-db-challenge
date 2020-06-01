exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
				{
					description: 'Design UI',
					notes: 'Adobe Sketch',
					completed: 'false',
					project_id: 1,
				},

				{
					description: 'Create Wireframes',
					notes: 'Sketch',
					completed: 'false',
					project_id: 1,
				},

				{
					description: 'Code UI',
					notes: '',
					completed: 'false',
					project_id: 1,
				},

				{
					description: 'Run Tests',
					notes: 'Backend Authentication',
					completed: 'false',
					project_id: 2,
				},

				{
					description: 'Upload to Portfolio',
					notes: '',
					completed: 'false',
					project_id: 2,
				},
			]);
		});
};
