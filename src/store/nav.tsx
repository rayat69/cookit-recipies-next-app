import { createContext, useCallback, useContext, useState } from 'react'

const NavContext = createContext<NavContextType | null>(null)

export const useNav = () => useContext(NavContext)!

export const NavProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen(prev => !prev), [])
  const handleOpen = useCallback(() => setOpen(true), [])
  const handleClose = useCallback(() => setOpen(false), [])

  return (
    <NavContext.Provider value={{ open, toggle, handleOpen, handleClose }}>
      {children}
    </NavContext.Provider>
  )
}

interface NavContextType {
  open: boolean
  toggle: () => void
  handleOpen: () => void
  handleClose: () => void
}
