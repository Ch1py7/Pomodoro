import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'

export const Options: FC = (): ReactElement => {
  return (
    <View style={styles.optionsContainer}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    paddingBottom: 20,
  },

  option: {
    backgroundColor: 'transparent',
  },
})
