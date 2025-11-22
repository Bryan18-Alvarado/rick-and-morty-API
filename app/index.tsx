import { ListCharacter } from '@/components/ListCharacter'
import { View } from 'react-native'
import { styles } from '../styles/index.style'

export default function Index() {
  return (
    <View style={styles.container}>
      <ListCharacter />
    </View>
  )
}
