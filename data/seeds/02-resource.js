exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('resources')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('resources').insert([
				{
					name: 'VScode',
					description: 'Code Editor',
				},

				{
					name: 'React',
					description: 'Library',
				},

				{
					name: 'iMovie',
					description: 'Video Editor',
				},

				{
					name: 'YouTube',
					description: 'Video Hosting Website',
				},
			]);
		});
};
