import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { FC, ReactElement, useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { DataContext } from '../../context/data.context'

export const TasksScreen: FC = (): ReactElement => {
  const { tasksList, setTasksList } = useContext(DataContext)
  const removeTask = (toRemove: number) => {
    const updatedList = tasksList.filter((_, index) => index !== toRemove)
    setTasksList(updatedList)
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fafafa',
          fontSize: 24,
          marginTop: 50,
        }}
      >
        Your tasks
      </Text>
      <View style={styles.tasksContainer}>
        {tasksList
          .filter((task) => task !== undefined)
          .map((task, index) => (
            <View key={index} style={styles.tasks}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fafafa',
                  paddingHorizontal: 10,
                  paddingRight: 70,
                }}
              >
                {task.substring(0, 21) + '...'}
              </Text>
              <Pressable
                style={styles.checkIcon}
                onPress={() => removeTask(index)}
              >
                <AntDesign name='check' size={24} color='#26C94A' />
              </Pressable>
              <Pressable
                style={styles.trashIcon}
                onPress={() => removeTask(index)}
              >
                <MaterialCommunityIcons
                  name='trash-can-outline'
                  size={24}
                  color='gray'
                />
              </Pressable>
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
    marginTop: 25,
    flex: 1,
  },

  tasks: {
    position: 'relative',
    left: 0,
    height: 60,
    width: 300,
    backgroundColor: '#3F2C2C',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },

  checkIcon: {
    position: 'absolute',
    transform: [{ translateY: 0 }],
    right: 60,
  },

  trashIcon: {
    position: 'absolute',
    transform: [{ translateY: 0 }],
    right: 20,
  },
})
