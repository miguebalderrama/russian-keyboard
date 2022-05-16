import React,{useContext,useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { KeyContext } from '../context/KeyContext';
import "./Screen.css";

function Screen() {
 
  const [token, setToken] = useState([0]);
  const [sugges, setSugges] = useState([0]);
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
 const spell = () => {
    let text = document.getElementById('screen').value;
    
    let nuevaStr = text.replace(",", "");
    nuevaStr = nuevaStr.replace(".", "");
    const encodedParams = new URLSearchParams();
    encodedParams.append("Text", nuevaStr);

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Host': 'bing-spell-check2.p.rapidapi.com',
		'X-RapidAPI-Key': 'c5588a863cmsh3c0b0b5ac819b2bp18c033jsn2e295f1bef86'
	},
	body: encodedParams
};
 let array1 = [];
 let array2 = [];
fetch('https://bing-spell-check2.p.rapidapi.com/spellcheck?mode=spell&mkt=ru-RU', options)
	.then(response => response.json())
	.then( (response) => {
    response.flaggedTokens.forEach(token => {
      //console.log(token.token);
     // console.log(token.suggestions[0].suggestion);
      array1.push(token.suggestions[0].suggestion);
      array2.push(token.token);
    })
    setSugges(array1);
    setToken(array2);
    console.log(sugges);
    }
      )
	.catch(err => console.error(err));
    

 }

    return (

 <>
 <button onClick={speakRussian}>Escuchar</button>
 <button onClick={spell}>Sugerir correcciones</button>

<FloatingLabel  className="mb-2" style={{ margin: "auto",width: "80%", paddingTop: '50px'}}>
    <Form.Control onKeyDown={(e)=> keyDown(e)} id='screen' as="textarea" placeholder="Leave a comment here"  style={{ height:"150px" }} autoFocus />
  </FloatingLabel>
 <div id="suggestion">
   <p>Sugerencias:</p>
   <p><span className='mal'>{token[0]}</span> reemplazar por: <span id="bien" className='bien'>{sugges[0]}</span></p>
   <p><span className='mal'>{token[1]}</span> reemplazar por: <span className='bien'>{sugges[1]}</span></p>
 </div> 
  </>   
  
    )
}

export default Screen
