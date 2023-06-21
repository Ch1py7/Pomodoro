import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { FC, ReactElement, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

export const Options: FC = (): ReactElement => {
  const [isPressed, setIsPressed] = useState<boolean[]>(
    new Array(4).fill(false)
  )

  const handlePress = (index: number) => {
    setIsPressed((prevState) => {
      return prevState.map((_, i) => i === index - 1)
    })
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.optionsContainer}>
      <Link
        to='/tasks'
        onPress={() => handlePress(1)}
        underlayColor='transparent'
      >
        <FontAwesome5
          name='tasks'
          size={40}
          color={isPressed[0] ? '#FF3131' : '#BDBDBD'}
        />
      </Link>
      <Link to='/' onPress={() => handlePress(2)} underlayColor='transparent'>
        <Ionicons
          name='md-time-outline'
          size={40}
          color={isPressed[1] ? '#FF3131' : '#BDBDBD'}
        />
      </Link>
      <Link
        to='/settings'
        onPress={() => handlePress(3)}
        underlayColor='transparent'
      >
        <Ionicons
          name='options'
          size={40}
          color={isPressed[2] ? '#FF3131' : '#BDBDBD'}
        />
      </Link>
      <Link
        to='/user'
        onPress={() => handlePress(4)}
        underlayColor='transparent'
      >
        <FontAwesome
          name='user'
          size={40}
          color={isPressed[3] ? '#FF3131' : '#BDBDBD'}
        />
      </Link>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  optionsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    bottom: 20,
    width: '100%',
    height: 40,
  },

  option: {
    backgroundColor: 'transparent',
  },
})
