import { useState, useEffect } from 'react'

// Define the Hobby type with the correct fields
export interface Hobby {
  id: number
  name: string
  description: string
  start_date?: string // Optional start_date
}

// Hook to fetch the hobbies
export function useHobbies() {
  const [data, setData] = useState<Hobby[]>([]) // Correctly type as Hobby[]

  useEffect(() => {
    async function fetchHobbies() {
      const response = await fetch('/api/v1/hobbies') // Replace with your actual API call
      const hobbies: Hobby[] = await response.json()
      setData(hobbies)
    }

    fetchHobbies()
  }, [])

  return { data }
}
