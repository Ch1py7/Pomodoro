import { FC, ReactElement } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Options } from '../Options'
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
      <KeyboardAvoidingView behavior='padding'>
        <Options />
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E1B1B',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
