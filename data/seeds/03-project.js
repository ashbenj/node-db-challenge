exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('projects')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('projects').insert([
				{
					name: 'Portfolio Website',
					description: 'Create one',
					completed: 'false',
				},

				{
					name: 'Social Media Profile',
					description: 'Sign up',
					completed: 'true',
				},
			]);
		});
};
