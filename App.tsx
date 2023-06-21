import { NativeRouter } from 'react-router-native'
import { Main } from './src/components/Main'
import { Options } from './src/components/Options'

export default function App() {
  return (
    <NativeRouter>
      <Main />
      <Options />
    </NativeRouter>
  )
}
