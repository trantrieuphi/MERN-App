import React from 'react'
import Buton from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

const RegisterForm = () => {
  return (
    <>
    <Form className='my-4'>
      <Form.Group className='form-controll'>
        <Form.Control type='text' placeholder='Username' name='username' required />
      </Form.Group>

      <Form.Group className='form-controll'>
        <Form.Control type='password' placeholder='Password' name='password' required />
      </Form.Group>

      <Form.Group className='form-controll'>
        <Form.Control type='password' placeholder='Comfirm Password' name='comfirmPassword' required />
      </Form.Group>

      <Buton variant='success' type='submit' >Register</Buton>
    </Form>
    <p> Already have an account?
      <Link to = '/login'>
        <Buton variant='info' size='sm' className='ml-2'>Login</Buton>
      </Link>
    </p>
    </>
    )
}

export default RegisterForm