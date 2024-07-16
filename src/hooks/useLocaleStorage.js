import { useState, useEffect } from 'react'

//add to storate

const useLocaleStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? initialValue,
  )
}

//get from locale storage
