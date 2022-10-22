import { useState } from "react"

export const useForm = (defaultValues) => {
  const [values, setValues] = useState(defaultValues)
  console.log(values)

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