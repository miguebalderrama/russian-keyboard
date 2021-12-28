import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function Screen() {
    return (
<FloatingLabel controlId="floatingTextarea"  className="mb-2" style={{ paddingTop: '100px'}}>
    <Form.Control as="textarea" placeholder="Leave a comment here"  style={{ height:"150px" }}  />
  </FloatingLabel>
    )
}

export default Screen
