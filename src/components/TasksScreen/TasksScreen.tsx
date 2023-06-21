import { FC, ReactElement, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DataContext } from '../../context/data.context'
import { Options } from '../Options'

export const TasksScreen: FC = (): ReactElement => {
  const { tasksList } = useContext(DataContext)
  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        {tasksList.map((task, index) => (
          <View key={index} style={styles.tasks}>
            <Text>{task}</Text>
          </View>
        ))}
      </View>
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

  tasksContainer: {
    marginTop: 50,
  },

  tasks: {
    height: 40,
    width: 300,
    backgroundColor: '#3F2C2C',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 10,
    marginVertical: 10,
  },
})
