import { useState, useEffect } from 'react'

//add to storate

const useLocaleStorage = (storageKey, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue,
  )

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value, storageKey])

  return [value, setValue]
}

export default useLocaleStorage