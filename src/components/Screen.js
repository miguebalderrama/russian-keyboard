import React,{useContext,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { KeyContext } from '../context/KeyContext';




function Screen() {

  const { keys } = useContext(KeyContext);    
  useEffect(() => {
    document.getElementById('screen').innerText = keys;
    
  }, [keys])
    return (
<FloatingLabel controlId="floatingTextarea"  className="mb-2" style={{ paddingTop: '100px'}}>
    <Form.Control id='screen' as="textarea" placeholder="Leave a comment here"  style={{ height:"150px" }}  />
  </FloatingLabel>
    )
}

export default Screen
