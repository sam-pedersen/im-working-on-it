import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { fetchHobbies } from '../apis/Hobbies.ts'
export interface Hobby {
  id: number
  name: string
  description: string
}

export function useHobbies() {
  const query = useQuery({ queryKey: ['fruits'], queryFn: fetchHobbies })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useHobbiesMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Hobbies'] })
    },
  })

  return mutation
}
