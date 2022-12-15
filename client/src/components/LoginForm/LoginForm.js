import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap'
import { loginUser } from '../../APIFunctions/Auth'

const LoginForm = ( {className} ) => {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ errorMsg, setErrorMsg ] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();  
    const { status, token, error} = await loginUser(username, password)

    if(status === 'ok') {
      window.localStorage.setItem('isAuthed', true)
      window.localStorage.setItem("token", token)
      window.location.href = '/explore'
    } else {
      setErrorMsg(error)
    }
  }

  
  return (
    <div className="t-w-fit t-font-light">
      <CardTitle className="t-font-semibold t-mb-[1.4rem]">
        Welcome to MyLib!
      </CardTitle>

      <Form onSubmit={handleSubmit} className="t-flex t-justify-between t-flex-col">
        
        {errorMsg && <div className="t-mb-1 t-text-red-500">{errorMsg}</div>}

        <FormGroup className="t-flex t-flex-col t-mb-[0.6rem]">
          <Label for="auth-username">
            Username
            <span className="t-text-red-500"> *</span>
          </Label>
          <Input 
            className="t-px-2 t-bg-[#F2F0ED] t-h-[1.8rem] t-border-0 t-rounded mt-[0.5em] focus:t-border-[1px] focus:t-outline-none focus:t-border-orange-300 focus:!t-shadow-none"
            id="auth-username"
            type="text"
            autoFocus
            required
            ref={null}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="t-flex t-flex-col my-[0.6rem]">
          <Label for="auth-password">
            Password
            <span className="t-text-red-500"> *</span>
          </Label>
          <Input 
            className="t-px-2 t-bg-[#F2F0ED] t-h-[1.8rem] t-border-0 t-rounded mt-[0.5em] focus:t-border-[1px] focus:t-outline-none focus:t-border-orange-300 focus:!t-shadow-none"
            type="password"
            id="auth-password"
            required
            ref={null}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button type="submit"  className="hover:t-cursor-pointer hover:t-bg-[#ac8010] t-w-full t-py-[10px] t-px-[20px] t-my-[0.6em] t-bg-[#C7930E] t-text-white t-font-bold t-rounded-sm t-border-none">
          Login
        </Button>

        <div className="t-my-[0.6em]">
          New to our platform? 
          <Link to="/register" className='t-text-blue-500 t-underline'> Register an account</Link>
        </div>

      </Form>
    </div>
  )
}

export default LoginForm