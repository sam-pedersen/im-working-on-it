import connection from './connection.ts'
import { Hobbies } from '../../models/Hobbies.ts'

export async function getAllHobbies(db = connection): Promise<Hobbies[]> {
  return db('Hobbies').select()
}
