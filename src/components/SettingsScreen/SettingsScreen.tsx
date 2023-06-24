import { AntDesign } from '@expo/vector-icons'
import { FC, ReactElement, useContext, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { DataContext } from '../../context/data.context'

export const SettingsScreen: FC = (): ReactElement => {
  const [isPressed, setIsPressed] = useState<boolean[]>(
    new Array(4).fill(false)
  )
  const {
    setMinutes,
    setSections,
    sections,
    setShortBreak,
    setLongBreak,
    shortBreak,
    longBreak,
  } = useContext(DataContext)
  const [focusedTime, setFocusedTime] = useState<number>(30)

  const handlePress = (index: number) => {
    setIsPressed((prevState) => {
      return prevState.map((_, i) => i === index - 1)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <View style={{ backgroundColor: '#3F2C2C', borderRadius: 20 }}>
          <Pressable style={styles.settings} onPress={() => handlePress(1)}>
            <Text style={{ fontSize: 20, color: '#f1f1f1' }}>Focused Time</Text>
            <Text
              style={{
                position: 'absolute',
                right: 60,
                fontSize: 20,
                color: '#aaaaaa',
              }}
            >
              {focusedTime} min
            </Text>
            <AntDesign
              name='down'
              size={24}
              color={'#fafafa'}
              style={{
                position: 'absolute',
                right: 20,
                transform: [{ rotate: isPressed[0] ? '180deg' : '0deg' }],
              }}
            />
          </Pressable>
          <View
            style={{
              display: isPressed[0] ? 'flex' : 'none',
              borderTopColor: '#fafafa',
              borderTopWidth: 1,
            }}
          >
            <Pressable
              onPress={() => {
                setFocusedTime(30), setMinutes(30)
              }}
            >
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                30 min
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setFocusedTime(60), setMinutes(60)
              }}
            >
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                60 min
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setFocusedTime(100), setMinutes(100)
              }}
            >
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                100 min
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setFocusedTime(120), setMinutes(120)
              }}
            >
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                120 min
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ backgroundColor: '#3F2C2C', borderRadius: 20 }}>
          <Pressable style={styles.settings} onPress={() => handlePress(2)}>
            <Text style={{ fontSize: 20, color: '#f1f1f1' }}>Short Break</Text>
            <Text
              style={{
                position: 'absolute',
                right: 60,
                fontSize: 20,
                color: '#aaaaaa',
              }}
            >
              {shortBreak} min
            </Text>
            <AntDesign
              name='down'
              size={24}
              color={'#fafafa'}
              style={{
                position: 'absolute',
                right: 20,
                transform: [{ rotate: isPressed[1] ? '180deg' : '0deg' }],
              }}
            />
          </Pressable>
          <View
            style={{
              display: isPressed[1] ? 'flex' : 'none',
              borderTopColor: '#fafafa',
              borderTopWidth: 1,
            }}
          >
            <Pressable onPress={() => setShortBreak(4)}>
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                4 min
              </Text>
            </Pressable>
            <Pressable onPress={() => setShortBreak(6)}>
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                6 min
              </Text>
            </Pressable>
            <Pressable onPress={() => setShortBreak(8)}>
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                8 min
              </Text>
            </Pressable>
            <Pressable onPress={() => setShortBreak(10)}>
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                10 min
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ backgroundColor: '#3F2C2C', borderRadius: 20 }}>
          <Pressable style={styles.settings} onPress={() => handlePress(3)}>
            <Text style={{ fontSize: 20, color: '#f1f1f1' }}>Long Break</Text>
            <Text
              style={{
                position: 'absolute',
                right: 60,
                fontSize: 20,
                color: '#aaaaaa',
              }}
            >
              {longBreak} min
            </Text>
            <AntDesign
              name='down'
              size={24}
              color={'#fafafa'}
              style={{
                position: 'absolute',
                right: 20,
                transform: [{ rotate: isPressed[2] ? '180deg' : '0deg' }],
              }}
            />
          </Pressable>
          <View
            style={{
              display: isPressed[2] ? 'flex' : 'none',
              borderTopColor: '#fafafa',
              borderTopWidth: 1,
            }}
          >
            <Pressable onPress={() => setLongBreak(15)}>
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                15 min
              </Text>
            </Pressable>
            <Pressable onPress={() => setLongBreak(20)}>
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                20 min
              </Text>
            </Pressable>
            <Pressable onPress={() => setLongBreak(35)}>
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                25 min
              </Text>
            </Pressable>
            <Pressable onPress={() => setLongBreak(30)}>
              <Text
                style={{ fontSize: 24, textAlign: 'center', color: '#fafafa' }}
              >
                30 min
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ backgroundColor: '#3F2C2C', borderRadius: 20 }}>
          <Pressable style={styles.settings} onPress={() => handlePress(4)}>
            <Text style={{ fontSize: 20, color: '#f1f1f1' }}>Sections</Text>
            <Text
              style={{
                position: 'absolute',
                right: 60,
                fontSize: 20,
                color: '#aaaaaa',
              }}
            >
              {sections}
            </Text>
            <AntDesign
              name='down'
              size={24}
              color={'#fafafa'}
              style={{
                position: 'absolute',
                right: 20,
                transform: [{ rotate: isPressed[3] ? '180deg' : '0deg' }],
              }}
            />
          </Pressable>
          <View
            style={{
              display: isPressed[3] ? 'flex' : 'none',
              borderTopColor: '#fafafa',
              borderTopWidth: 1,
            }}
          >
            <Pressable>
              <Pressable onPress={() => setSections(2)}>
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    color: '#fafafa',
                  }}
                >
                  2
                </Text>
              </Pressable>
            </Pressable>
            <Pressable>
              <Pressable onPress={() => setSections(4)}>
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    color: '#fafafa',
                  }}
                >
                  4
                </Text>
              </Pressable>
            </Pressable>
            <Pressable>
              <Pressable onPress={() => setSections(6)}>
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    color: '#fafafa',
                  }}
                >
                  6
                </Text>
              </Pressable>
            </Pressable>
            <Pressable>
              <Pressable onPress={() => setSections(8)}>
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    color: '#fafafa',
                  }}
                >
                  8
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#2E1B1B',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  settingsContainer: {
    paddingTop: 130,
    alignItems: 'center',
    gap: 60,
  },

  settings: {
    position: 'relative',
    width: 300,
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
})
