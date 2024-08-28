export async function up(knex) {
  return knex.schema.createTable('Hobbies', (table) => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('description')
    table.date('start_date')
    table.timestamps(true, true)
    table.boolean('completed')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('Hobbies')
}
