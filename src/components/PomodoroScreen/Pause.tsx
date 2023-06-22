import { AntDesign, Ionicons } from '@expo/vector-icons'
import { FC, ReactElement, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

export const Pause: FC = (): ReactElement => {
  const [pause, setPause] = useState<boolean>(true)

  return (
    <View>
      <Pressable onPress={() => setPause((prev) => !prev)} style={styles.pause}>
        {pause ? (
          <AntDesign name='caretright' size={24} color='#fafafa' />
        ) : (
          <Ionicons name='pause-sharp' size={44} color='#fafafa' />
        )}
      </Pressable>
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
