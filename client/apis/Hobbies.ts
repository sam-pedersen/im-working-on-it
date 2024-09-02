import request from 'superagent'

const rootUrl = '/api/v1'

export function getHobbies(): Promise<string[]> {
  return request.get(rootUrl + '/hobbies').then((res) => {
    return res.body.hobbies
  })
}
