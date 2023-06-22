import { FC, ReactElement, useState } from 'react'
import { Route, Routes } from 'react-router-native'
import { DataContext } from '../../context/data.context'
import { PomodoroScreen } from '../PomodoroScreen'
import { SettingsScreen } from '../SettingsScreen'
import { TasksScreen } from '../TasksScreen'
import { UserScreen } from '../UserScreen'

export const Main: FC = (): ReactElement => {
  const [tasksList, setTasksList] = useState<string[]>([])
  const [minutes, setMinutes] = useState<number>(30)
  const [seconds, setSeconds] = useState<number>(60)
  const [sections, setSections] = useState<number>(4)

  const tasks = (task: string) => {
    if (task === '') return
    else if (tasksList.includes(task)) return
    setTasksList((prev) => [...prev, task])
  }

  return (
    <DataContext.Provider
      value={{
        sections,
        setSections,
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
