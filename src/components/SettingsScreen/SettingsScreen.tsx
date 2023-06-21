import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'
import { Options } from '../Options'

export const SettingsScreen: FC = (): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}></View>
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

  settingsContainer: {
    marginTop: 50,
  },
})
