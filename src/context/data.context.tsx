import { Dispatch, SetStateAction, createContext } from 'react'

interface DataContextState {
  setTasksList: Dispatch<SetStateAction<string[]>>
  tasksList: string[]
  setPomodoroTime: Dispatch<SetStateAction<string>>
  pomodoroTime: string
  tasks: (task: string) => void
}

export const DataContext = createContext<DataContextState>({
  setTasksList: () => {},
  tasksList: [],
  setPomodoroTime: () => {},
  pomodoroTime: '',
  tasks: () => {},
})
