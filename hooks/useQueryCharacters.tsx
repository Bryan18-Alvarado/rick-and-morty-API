import { API_URL } from '@/config/config'
import { Character } from '@/interface/character'
import { useQuery } from '@tanstack/react-query'

export const useQueryCharacters = () => {
  const getCharacters = async () => {
    try {
      const response = await fetch(`${API_URL}/character`)
      return (await response.json()) as Character[]
    } catch (error) {
      console.log('error fetching data:', error)
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['character'],
    queryFn: getCharacters,
  })

  return { data: data ?? [], isLoading, isError }
}
