import { useQueryCharacters } from '@/hooks/useQueryCharacters'
import { Character } from '@/interface/character'
import { createContext, useContext } from 'react'

const defaultValue = {
  resources: {
    data: [] as Character[],
    isLoading: false,
    isError: false,
  },
}

export const CharacterContext = createContext(defaultValue)

export const CharacterProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { data, isLoading, isError } = useQueryCharacters()

  return (
    <CharacterContext.Provider
      value={{
        resources: { data, isLoading, isError },
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacterProvider = () => {
  const characterContext = useContext(CharacterContext)

  return characterContext
}
