import { useEffect, useState } from 'react'
import axios from 'axios'
import 'regenerator-runtime/runtime'

const useGetCategories = (API) => {
  const [categories, setCategories] = useState([])

  useEffect(async () => {
    const response = await axios(API)
    setCategories(response.data)
  }, [])
  return categories
}

export default useGetCategories
