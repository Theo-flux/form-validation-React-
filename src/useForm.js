import {useState} from 'react'
import validate from './utils/validate'

export default function useForm(props) {
  const [data, setData] = useState({
    firstName:"",
    lastName: "",
    mail:"",
    password:""
  })

  const [errors, setErrors] = useState("")

  function handleChange(event) {
    const {name,value} = event.target
    setData({...data, [name]:value})
  }


  function handleSubmit(event) {
    event.preventDefault()
    setErrors(validate(data))

  }

  return {data, handleChange, handleSubmit, errors}
}
