import { FC, ReactElement, useState } from 'react'
import { Route, Routes } from 'react-router-native'
import { DataContext } from '../../context/data.context'
import { PomodoroScreen } from '../PomodoroScreen'

export const Main: FC = (): ReactElement => {
  const [tasksList, setTasksList] = useState<string[]>([])
  const [pomodoroTime, setPomodoroTime] = useState<string>('05:45')

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
        pomodoroTime,
        setPomodoroTime,
        tasks,
      }}
    >
      <Routes>
        <Route path='/' Component={PomodoroScreen} />
      </Routes>
    </DataContext.Provider>
  )
}
