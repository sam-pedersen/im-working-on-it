export interface Hobbies {
  id: number
  name: string
  user_id: string
  start_date?: Date
  description: string
  timestamps: boolean
  completed: boolean
}

export interface HobbyData {
  name: string
}
