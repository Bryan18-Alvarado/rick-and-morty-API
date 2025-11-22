import { useCharacterProvider } from '@/context/useCharacterProvider'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

export const ListCharacter = () => {
  const { resources } = useCharacterProvider()
  return (
    <View>
      <FlatList
        data={resources.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  )
}
