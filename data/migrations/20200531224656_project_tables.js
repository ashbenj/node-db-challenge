exports.up = function (knex) {
	return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments();
			tbl.text('project_id', 128).unique().notNullable();
			tbl.string('name', 255).unique().notNullable();
			tbl.string('description', 255);
			tbl.boolean('completed').defaultTo(false).notNullable();
		})

		.createTable('tasks', (tbl) => {
			tbl.increments();
			tbl.text('tasks_id', 128).notNullable().unique;
			tbl.string('description', 255).unique().notNullable();
			tbl.boolean('completed').defaultTo(false).notNullable();
			tbl.string('notes', 255);
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

		.createTable('resources', (tbl) => {
			tbl.increments();
			tbl.text('resource_id', 128).unique().notNullable();
			tbl.string('name', 255).unique().notNullable();
			tbl.string('description', 255);
		})

		.createTable('project_resources', (tbl) => {
			tbl.increments();
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('resources.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('project_resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects');
};
