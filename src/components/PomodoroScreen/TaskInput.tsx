import { AntDesign } from '@expo/vector-icons'
import { FC, ReactElement, useContext, useState } from 'react'
import { Keyboard, Pressable, StyleSheet, TextInput, View } from 'react-native'
import { DataContext } from '../../context/data.context'

export const TaskInput: FC = (): ReactElement => {
  const { tasks } = useContext(DataContext)
  const [taskList, setTaskList] = useState<string>('')

  return (
    <View style={styles.container}>
      <TextInput
        onChange={(e) => setTaskList(e.nativeEvent.text)}
        placeholder='Write a Task'
        style={styles.input}
        value={taskList}
        onSubmitEditing={Keyboard.dismiss}
        onKeyPress={(e) => {
          if (e.nativeEvent.key === 'Enter') {
            tasks(taskList), setTaskList(''), Keyboard.dismiss()
        } }}
      />
      <Pressable
        style={styles.checkIcon}
        onPress={() => {
          tasks(taskList), setTaskList(''), Keyboard.dismiss()
        }}
      >
        <AntDesign name='check' size={24} color='#26C94A' />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    positon: 'relative',
    paddingTop: 50,
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#A54C4C',
    borderRadius: 10,
    color: '#fafafa',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  checkIcon: {
    position: 'absolute',
    transform: [{ translateY: 10 }],
    top: 54,
    right: 14,
  },
})
