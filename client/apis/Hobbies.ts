import request from 'superagent'
import { Hobbies } from '../../models/Hobbies'

const rootUrl = '/api/v1'

export async function fetchHobbies(): Promise<string[]> {
  return request.get(rootUrl + '/hobbies').then((res) => {
    return res.body.hobbies
  })
}

export async function addHobby(hobby: string) {
  const newHobby: Hobbies = {
    name: '',
    user_id: '',
    description: hobby,
    completed: false,
    id: 0,
    timestamps: false,
    start_date: undefined,
  }
  await request.post(rootUrl).send(newHobby)
}
