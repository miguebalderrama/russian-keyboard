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
 const speakRussian = () => {

// new SpeechSynthesisUtterance object
let utter = new SpeechSynthesisUtterance();
utter.lang = 'ru-RU';
utter.text = document.getElementById('screen').value//'Здравствуйте, меня зовут Мигель, у меня русская жена.';
utter.volume = 0.7;
// event after text has been spoken
utter.onend = function() {
	alert('Se ha finalizado la reproducción del texto.');
}

// speak
window.speechSynthesis.speak(utter);
 }

    return (

 <>
 <button onClick={speakRussian}>Escuchar</button>
<FloatingLabel  className="mb-2" style={{ margin: "auto",width: "80%", paddingTop: '50px'}}>
    <Form.Control onKeyDown={(e)=> keyDown(e)} id='screen' as="textarea" placeholder="Leave a comment here"  style={{ height:"150px" }} autoFocus />
  </FloatingLabel>
  </>   
  
    )
}

export default Screen
