import { FC, ReactElement, useState } from 'react'
import { Route, Routes } from 'react-router-native'
import { DataContext } from '../../context/data.context'
import { PomodoroScreen } from '../PomodoroScreen'
import { SettingsScreen } from '../SettingsScreen'
import { TasksScreen } from '../TasksScreen'
import { UserScreen } from '../UserScreen'

export const Main: FC = (): ReactElement => {
  const [tasksList, setTasksList] = useState<string[]>([])
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  const tasks = (task: string) => {
    if (task === '') return
    else if (tasksList.includes(task)) return
    setTasksList((prev) => [...prev, task])
  }

  return (
    <DataContext.Provider
      value={{
        tasksList,
        setTasksList,
        minutes,
        setMinutes,
        setSeconds,
        seconds,
        tasks,
      }}
    >
      <Routes>
        <Route path='/tasks' Component={TasksScreen} />
        <Route path='/' Component={PomodoroScreen} />
        <Route path='/settings' Component={SettingsScreen} />
        <Route path='/user' Component={UserScreen} />
      </Routes>
    </DataContext.Provider>
  )
}
