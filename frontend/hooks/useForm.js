import { useState } from 'react'

export default function useForm(initialValues, callback) {
  const [inputs, setInputs] = useState(initialValues)

  const handleSubmit = event => {
    if (event) event.preventDefault()
    callback()
  }

  const handleInputChange = event => {
    event.persist()
    setInputs(inputsProps => ({
      ...inputsProps,
      [event.target.name]: event.target.value
    }))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}
