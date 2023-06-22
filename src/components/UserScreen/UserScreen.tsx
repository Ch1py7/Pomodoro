import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

export const UserScreen: FC = (): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}></View>
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

  userContainer: {
    marginTop: 50,
  },
})
