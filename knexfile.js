// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './projects.db3',
		},
		useNullAsDefault: true,
	},
	migrations: {
		directory: '.data/migrations',
	},
	seeds: {
		directory: './data/seeds',
	},
	pool: {
		afreCreate: (conn, done) => {
			conn.run('PRAGMA foreign_keys = ON', done);
		},
	},
};
