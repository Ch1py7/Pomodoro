import { FC, ReactElement, useState } from 'react'
import { Route, Routes } from 'react-router-native'
import { DataContext } from '../../context/data.context'
import { PomodoroScreen } from '../PomodoroScreen'
import { SettingsScreen } from '../SettingsScreen'
import { TasksScreen } from '../TasksScreen'

export const Main: FC = (): ReactElement => {
  const [tasksList, setTasksList] = useState<string[]>([])
  const [minutes, setMinutes] = useState<number>(30)
  const [minutesToShow, setMinutesToShow] = useState<number>(60)
  const [sections, setSections] = useState<number>(4)
  const [isPause, setIsPause] = useState<boolean>(true)
  const [shortBreak, setShortBreak] = useState<number>(4)
  const [longBreak, setLongBreak] = useState<number>(20)
  const [isBreak, setIsBreak] = useState<boolean>(false)
  const [shortBreakToShow, setShortBreakToShow] = useState<number>(0)

  const tasks = (task: string) => {
    if (task === '') return
    else if (tasksList.includes(task)) return
    setTasksList((prev) => [...prev, task])
  }

  return (
    <DataContext.Provider
      value={{
        shortBreakToShow,
        setShortBreakToShow,
        isBreak,
        setIsBreak,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        isPause,
        setIsPause,
        sections,
        setSections,
        tasksList,
        setTasksList,
        minutes,
        setMinutes,
        setMinutesToShow,
        minutesToShow,
        tasks,
      }}
    >
      <Routes>
        <Route path='/tasks' Component={TasksScreen} />
        <Route path='/' Component={PomodoroScreen} />
        <Route path='/settings' Component={SettingsScreen} />
      </Routes>
    </DataContext.Provider>
  )
}
