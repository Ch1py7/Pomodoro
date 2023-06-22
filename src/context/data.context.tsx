import { Dispatch, SetStateAction, createContext } from 'react'

interface DataContextState {
  setTasksList: Dispatch<SetStateAction<string[]>>
  tasksList: string[]
  setMinutes: Dispatch<SetStateAction<number>>
  minutes: number
  setSeconds: Dispatch<SetStateAction<number>>
  seconds: number
  tasks: (task: string) => void
  setSections: Dispatch<SetStateAction<number>>
  sections: number
}

export const DataContext = createContext<DataContextState>({
  setTasksList: () => {},
  tasksList: [],
  setMinutes: () => {},
  minutes: 0,
  setSeconds: () => {},
  seconds: 0,
  tasks: () => {},
  setSections: () => {},
  sections: 4,
})
