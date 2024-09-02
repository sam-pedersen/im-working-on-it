import db from './connection.ts'
import { Hobbies } from '../../models/Hobbies.ts'

export async function getAllHobbies(): Promise<Hobbies[]> {
  return db('Hobbies').select()
}
export async function getHobbyById(id: number) {
  return await db('Hobbies').where('id', id).select()
}
