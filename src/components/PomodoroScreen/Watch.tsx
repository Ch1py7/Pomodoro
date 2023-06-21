import { FC, ReactElement, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DataContext } from '../../context/data.context'

export const Watch: FC = (): ReactElement => {
  const { pomodoroTime } = useContext(DataContext)
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timer}>{pomodoroTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    height: 300,
    width: 300,
    backgroundColor: '#302222',
    borderRadius: 150,
    borderWidth: 10,
    borderColor: '#FF5050',
    justifyContent: 'center',
    alignItems: 'center',
  },

  timer: {
    color: '#f1f1f1',
    fontSize: 70,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
