import db from './connection.ts'
import { Hobbies } from '../../models/Hobbies.ts'

export async function getAllHobbies(): Promise<Hobbies[]> {
  return db('Hobbies').select()
}
export async function getHobbyById(id: number) {
  return await db('Hobbies').where('id', id).select()
}
export async function createHobby(data: Hobbies) {
  return await db('hobbies').insert(data)
}
export async function updateHobby(data: Hobbies, id: number) {
  return await db('hobbies').where('id', id).update(data)
}

export async function deleteHobby(data: Hobbies, id: number) {
  return await db('hobbies').where({ id }).delete()
}
