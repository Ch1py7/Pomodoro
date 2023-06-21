import { Ionicons } from '@expo/vector-icons'
import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

export const Pause: FC = (): ReactElement => {
  return (
    <View style={styles.pause}>
      <Ionicons name='pause-sharp' size={44} color='#fafafa' />
    </View>
  )
}

const styles = StyleSheet.create({
  pause: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4E4E',
    borderRadius: 30,
    shadowColor: '#FF0000',
    shadowOffset: { width: -20, height: -10 },
    shadowOpacity: 0,
    shadowRadius: 6,
    elevation: 4,
  },
})
