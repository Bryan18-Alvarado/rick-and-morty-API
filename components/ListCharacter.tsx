import { useCharacterProvider } from '@/context/CharacterProvider'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

export const ListCharacter = () => {
  const { resources } = useCharacterProvider()

  if (resources.isLoading) return <Text>Loading...</Text>
  if (resources.isError) return <Text>Error loading characters.</Text>
  if (!resources.data.length) return <Text>No characters found.</Text>

  return (
    <View>
      <FlatList
        data={resources.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginBottom: 20 }}>
            <Text>Nombre: {item.name}</Text>
            <Text>species: {item.species}</Text>
            <Text>status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  )
}
