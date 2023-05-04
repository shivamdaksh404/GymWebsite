import React,{useState} from 'react'
import TextField from '@mui/material/TextField';

const Login = () => {
  const [data, setData] = useState('')

  const handleEmail = (event) => {

  }

  const handlePassword = (event) => {

  }

  const handleClick = () => {

  }

  return (
    <>
    <div> 
      <div>
        <input onChange={handleEmail} placeholder='Email'></input>
      </div>
      <div>
        <input onChange={handlePassword} placeholder='Password'></input>
      </div>
      <button onClick={handleClick}>Submit</button>
    </div>

    
    </>
  )
}

export default Login

