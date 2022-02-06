import React,{useContext,useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { KeyContext } from '../context/KeyContext';
import "./Screen.css";





function Screen() {
  const { addKey } = useContext(KeyContext); 
     
  const [Screen, setScreen] = useState("");
  useEffect(() => {
    console.log("me ejecute Screen")
  
    document.getElementById('screen').textContent = Screen;
    
  }, [Screen])
const keyDown = (e) => {
  //let key = e.key;
  console.log(toString(e.key))
  
  if(e.key==="Backspace"){
    setScreen(Screen.slice(0, -1));
  }else{
  addKey(document.getElementById('screen').value)  //addKey(key);
 // document.getElementById('screen').textContent = keys;
 // setScreen(keys)
  }
}

    return (
<FloatingLabel  className="mb-2" style={{ paddingTop: '50px'}}>
    <Form.Control onKeyDown={(e)=> keyDown(e)} id='screen' as="textarea" placeholder="Leave a comment here"  style={{ height:"150px" }} autoFocus />
  </FloatingLabel>
    )
}

export default Screen
