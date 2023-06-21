import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'
import { Pause } from './Pause'
import { TaskInput } from './TaskInput'
import { Watch } from './Watch'
import { WhichPomodoro } from './WhichPomodoro'

export const PomodoroScreen: FC = (): ReactElement => {
  return (
    <View style={styles.container}>
      <TaskInput />
      <Watch />
      <WhichPomodoro />
      <Pause />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E1B1B',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 40,
    gap: 60,
  },
})
