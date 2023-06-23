import { FC, ReactElement, useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DataContext } from '../../context/data.context'

export const WhichPomodoro: FC = (): ReactElement => {
  const { sections } = useContext(DataContext)
  const whichPomodoro: null[] = new Array(sections).fill(null)
  const [howManyPomodoros, setHowManyPomodoros] = useState(35)

  useEffect(() => {
    if (whichPomodoro.length === 2) {
      setHowManyPomodoros(5)
    } else if (whichPomodoro.length === 4) {
      setHowManyPomodoros(35)
    } else if (whichPomodoro.length === 6) {
      setHowManyPomodoros(65)
    } else if (whichPomodoro.length === 8) {
      setHowManyPomodoros(95)
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {whichPomodoro.map((_, index) => (
        <View
          key={index}
          style={{
            position: 'absolute',
            bottom: '50%',
            left: howManyPomodoros,
            transform: [{ translateX: -10 * (index * 3) }],
            backgroundColor: '#AB4848',
            borderRadius: 50,
            width: 20,
            height: 20,
          }}
        ></View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 20,
  },

  line: {
    position: 'absolute',
    height: 3,
    backgroundColor: 'blue',
  },
})
