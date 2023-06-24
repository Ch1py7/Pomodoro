import { AntDesign, Ionicons } from '@expo/vector-icons'
import { FC, ReactElement, useContext, useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { DataContext } from '../../context/data.context'

interface getStatusProps {
  initialTimestamp: number | null
  intervalId: NodeJS.Timer | null
}

const getStatus = ({ initialTimestamp, intervalId }: getStatusProps) => {
  if (intervalId) return 'inProgress'
  if (initialTimestamp) return 'paused'
  return 'initial'
}

export const Pause: FC = (): ReactElement => {
  const {
    isPause,
    setMinutesToShow,
    setIsPause,
    minutes,
    shortBreak,
    setShortBreakToShow,
    setIsBreak,
  } = useContext(DataContext)

  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null)
  const [initialTimestamp, setInitialTimestamp] = useState<number | null>(null)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [initialBreak, setInitialBreak] = useState<number | null>(null)
  const status = getStatus({ initialTimestamp, intervalId })

  const totalTimer = minutes * 60
  const currentTimer = countdown! / 60

  const totalShortBreak = shortBreak * 60
  const currentShortBreak = initialBreak! / 60

  const startPomodoro = (initialTimestamp: number | null) => {
    const interval = setInterval(() => {
      const currentTime: number = new Date().getTime()
      const timeDifference: number = currentTime - initialTimestamp!
      const pomodoroTime = totalTimer - Math.floor(timeDifference / 1000)
      setCountdown(pomodoroTime)
      if (pomodoroTime <= 0) {
        clearInterval(interval)
        setIsBreak(true)
        startBreak(new Date().getTime())
        return
      }
    }, 1000)
    setIntervalId(interval)
  }

  const startBreak = (initialTimestamp: number | null) => {
    const interval = setInterval(() => {
      const currentTime: number = new Date().getTime()
      const timeDifference: number = currentTime - initialTimestamp!
      const shortBreakTime = totalShortBreak - Math.floor(timeDifference / 1000)
      setInitialBreak(shortBreakTime)
      if (shortBreakTime <= 0) {
        clearInterval(interval)
        setIsBreak(false)
        startPomodoro(new Date().getTime())
        return
      }
    }, 1000)
    setIntervalId(interval)
  }

  const pause = () => {
    clearInterval(intervalId ?? 0)
    setIntervalId(null)
  }

  const resume = () => {
    startPomodoro(initialTimestamp)
  }

  useEffect(() => {
    setMinutesToShow(currentTimer)
    setShortBreakToShow(currentShortBreak)
  }, [currentTimer, currentShortBreak])

  return (
    <View>
      <Pressable
        onPress={() => {
          if (status === 'initial') {
            const initialTimestamp = new Date()
            startPomodoro(initialTimestamp.getTime())
            setInitialTimestamp(initialTimestamp.getTime())
          }
          if (status === 'inProgress') {
            pause()
          }
          if (status === 'paused') {
            resume()
          }
          setIsPause((prev) => !prev)
        }}
        style={styles.pause}
      >
        {isPause ? (
          <AntDesign name='caretright' size={24} color='#fafafa' />
        ) : (
          <Ionicons name='pause-sharp' size={44} color='#fafafa' />
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  pause: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4E4E',
    borderRadius: 30,
    shadowColor: '#FF0000',
    shadowOffset: { width: -20, height: -10 },
    shadowOpacity: 0,
    shadowRadius: 6,
    elevation: 4,
  },
})
