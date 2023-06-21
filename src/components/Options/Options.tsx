import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { FC, ReactElement } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

export const Options: FC = (): ReactElement => {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.optionsContainer}
    >
      <Link to='/tasks'>
        <FontAwesome5 name='tasks' size={40} color='#BDBDBD' />
      </Link>
      <Link to='/'>
        <Ionicons name='md-time-outline' size={40} color='#BDBDBD' />
      </Link>
      <Link to='/settings'>
        <Ionicons name='options' size={40} color='#BDBDBD' />
      </Link>
      <Link to='/user'>
        <FontAwesome name='user' size={40} color='#BDBDBD' />
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
