import React, { useState } from 'react'
const useLocalStorage = (key, valueInitial) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : valueInitial
    } catch (error) {
      return valueInitial
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [value, setLocalStorage]
}

export { useLocalStorage }
