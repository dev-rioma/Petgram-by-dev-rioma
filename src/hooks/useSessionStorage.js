import { useState } from 'react'

function useSessionStorage (key, initValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item !== null ? item : initValue
    } catch (error) {
      console.error(error)
      return initValue
    }
  })

  const setSessionStorage = value => {
    try {
      window.sessionStorage.setItem(key, value)
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setSessionStorage]
}

export default useSessionStorage
