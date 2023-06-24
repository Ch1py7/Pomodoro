import { Dispatch, SetStateAction, createContext } from 'react'

interface DataContextState {
  setTasksList: Dispatch<SetStateAction<string[]>>
  tasksList: string[]
  setMinutes: Dispatch<SetStateAction<number>>
  minutes: number
  setMinutesToShow: Dispatch<SetStateAction<number>>
  minutesToShow: number
  tasks: (task: string) => void
  setSections: Dispatch<SetStateAction<number>>
  sections: number
  setIsPause: Dispatch<SetStateAction<boolean>>
  isPause: boolean
  setShortBreak: Dispatch<SetStateAction<number>>
  shortBreak: number
  setLongBreak: Dispatch<SetStateAction<number>>
  longBreak: number
  setIsBreak: Dispatch<SetStateAction<boolean>>
  isBreak: boolean
  setShortBreakToShow: Dispatch<SetStateAction<number>>
  shortBreakToShow: number
}

export const DataContext = createContext<DataContextState>({
  setTasksList: () => {},
  tasksList: [],
  setMinutes: () => {},
  minutes: 0,
  setMinutesToShow: () => {},
  minutesToShow: 0,
  tasks: () => {},
  setSections: () => {},
  sections: 4,
  setIsPause: () => {},
  isPause: true,
  setShortBreak: () => {},
  shortBreak: 0,
  setLongBreak: () => {},
  longBreak: 0,
  setIsBreak: () => {},
  isBreak: false,
  setShortBreakToShow: () => {},
  shortBreakToShow: 0,
})
