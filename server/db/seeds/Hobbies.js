export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Hobbies').del()

  // Inserts seed entries
  await knex('Hobbies').insert([
    {
      id: 1,
      name: 'banana',
      description: 'bike parts',
      start_date: '10/20/24',
      completed: false,
    },
    {
      id: 2,
      name: 'sam',
      description: 'blackwing parts',
      start_date: '10/20/24',
      completed: false,
    },
    {
      id: 3,
      name: 'chef',
      description: ' new recipe parts',
      start_date: '10/20/24',
      completed: false,
    },
  ])
}
