import { createContext, useState } from 'react'
import translations from '../translations'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [langue, setLangue] = useState('fr')
  const t = translations[langue]

  return (
    <LanguageContext.Provider value={{ langue, setLangue, t }}>
      {children}
    </LanguageContext.Provider>
  )
}