import { useState, useEffect } from 'react'

// Define the structure of a Hobby
export interface Hobby {
  id: number
  name: string
  description: string
  start_date?: Date
}

export function useHobbies() {
  const [data, setData] = useState<Hobby[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHobbies = async () => {
      try {
        const response = await fetch('/api/hobbies') // Assuming this returns a JSON array of Hobby objects
        const hobbies: Hobby[] = await response.json() // Ensure it's typed as an array of Hobby
        setData(hobbies)
      } catch (err) {
        setError('oh no error')
      }
    }

    fetchHobbies()
  }, [])

  return { data, error }
}
