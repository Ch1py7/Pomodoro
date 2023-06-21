import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

export const WhichPomodoro: FC = (): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.fPomodoro}></View>
      <View style={styles.sPomodoro}></View>
      <View style={styles.tPomodoro}></View>
      <View style={styles.foPomodoro}></View>
      <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 140,
    height: 20,
  },

  line: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{ translateY: -2 }],
    backgroundColor: '#AB4848',
    height: 3,
  },

  fPomodoro: {
    position: 'absolute',
    bottom: '50%',
    left: 0,
    transform: [{ translateY: 10 }],
    backgroundColor: '#AB4848',
    borderRadius: 50,
    width: 20,
    height: 20,
  },

  sPomodoro: {
    position: 'absolute',
    bottom: '50%',
    left: '28%',
    transform: [{ translateY: 10 }],
    backgroundColor: '#AB4848',
    borderRadius: 50,
    width: 20,
    height: 20,
  },

  tPomodoro: {
    position: 'absolute',
    bottom: '50%',
    right: '28%',
    transform: [{ translateY: 10 }],
    backgroundColor: '#AB4848',
    borderRadius: 50,
    width: 20,
    height: 20,
  },

  foPomodoro: {
    position: 'absolute',
    bottom: '50%',
    right: 0,
    transform: [{ translateY: 10 }],
    backgroundColor: '#AB4848',
    borderRadius: 50,
    width: 20,
    height: 20,
  },
})
