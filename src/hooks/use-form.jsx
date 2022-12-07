import { useState } from "react"

export const useForm = (defaultValues) => {
  const [values, setValues] = useState(defaultValues)

  const handleValues = (e) => {
    const {value, name} = e.target;
    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  return [values, handleValues]
}