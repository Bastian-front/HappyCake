import React from 'react'
import { Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <div>
      <Form className='w-90 ps-2 pt-3 position-absolute top-50 start-50 translate-middle'>
        <br />
      <h1 className='text-center'>Cuentanos ¿ En qué te podemos ayudar?</h1>
      <br />
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className=''>Descripción</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
      </Form.Group>
      <Button variant="primary" type="submit" className='bg-danger '>
        Enviar
      </Button>
    </Form>
    </div>
  )
}

export default Contacto