import { useState } from 'react'

const useInputValue = (initValue) => {
  const [value, setValue] = useState(initValue)
  const onChange = (e) => setValue(e.target.value)
  return {
    value,
    onChange,
  }
}

export { useInputValue }
