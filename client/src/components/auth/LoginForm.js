import React from 'react'
import Buton from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
const LoginForm = () => {
  
  return (
    <>
    <Form className='my-4'>
      <Form.Group className='form-controll'>
        <Form.Control type='text' placeholder='Username' name='username' required />
      </Form.Group>

      <Form.Group className='form-controll'>
        <Form.Control type='password' placeholder='Password' name='password' required />
      </Form.Group>

      <Buton variant='success' type='submit' >Login</Buton>
    </Form>
    <p> Don't have account?
      <Link to='/register'>
        <Buton variant='info' size='sm' className='ml-2'>Register</Buton>
      </Link>
    </p>
    </>
  
  )
  
  
}

export default LoginForm