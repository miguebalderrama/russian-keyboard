import React, {useContext,useEffect,useState} from 'react'
import "./Keys.css";
import Container from 'react-bootstrap/Container';
import { KeyContext } from '../../context/KeyContext';





function Keys() {
    
    const { addKey } = useContext(KeyContext); 
    const { keys } = useContext(KeyContext); 
    const [bloqMay, setBloqMay] = useState(true);
    
   
    
    if(bloqMay){
        var keyImpr = ['ё','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','Ч','с','м','и','т','ь','б','ю'];
    }else{
         keyImpr = ['Ё','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Я','Ч','С','М','И','Т','Ь','Б','Ю'];
    }


    useEffect(() => {
        document.getElementById('screen').value = keys;
        console.log("me ejecute useEfectKeys")
        
      }, [keys])
    
    const pushKey = (e) => {
        
        let key = e.target.innerText;
        console.log(key.charCodeAt(0))       
        if(key === 'bloq mayus') {          

            console.log("Aprete el boton mayus");
            if(bloqMay===false){ 
                keyImpr = keyImpr.map(function(item){
                    return item.toUpperCase();})               
                
                console.log(keyImpr);
                setBloqMay(true);
            }
            else{                
                keyImpr = keyImpr.map(function(item){
                    return item.toLowerCase();})
                console.log(keyImpr);
                setBloqMay(false);
            }
        } 
        let arr = [...key];             
        console.log("aprete teclado virtual")
        if(arr.length>1) return;     
                 
        addKey(document.getElementById('screen').value+key);
        console.log(document.getElementById('screen').value+key);
        document.getElementById('screen').focus();

        
    }

    return (
       <Container className='keyboard' style={{ paddingTop: '30px' }}>
           <ul className="small-keys" onClick={(e) => pushKey(e)}>
           <li >,</li>{' '}
           <li >.</li>{' '}
           <li >:</li>{' '}
           <li >;</li>{' '}
           <li >-</li>{' '}
           <li >/</li>{' '}
           <li >(</li>{' '}
           <li >)</li>{' '}
           <li >?</li>{' '}
           <li >!</li>{' '}
           <li >"</li>{' '}
           </ul>
           
           <ul className="keys" onClick={(e) => pushKey(e)}>
           <li>{keyImpr[0]}</li>{' '}
           <li>{keyImpr[1]}</li>{' '}
           <li>{keyImpr[2]}</li>{' '}
           <li>{keyImpr[3]}</li>{' '}
           <li>{keyImpr[4]}</li>{' '}
           <li>{keyImpr[5]}</li>{' '}
           <li>{keyImpr[6]}</li>{' '}
           <li>{keyImpr[7]}</li>{' '}
           <li>{keyImpr[8]}</li>{' '}
           <li>{keyImpr[9]}</li>{' '}
           <li>{keyImpr[10]}</li>{' '}
           <li>{keyImpr[11]}</li>{' '}
           <li>{keyImpr[12]}</li>{' '}
           </ul>
          
              <ul className="keys" onClick={(e) => pushKey(e)}>
           <li className='bloqMayus'>bloq mayus</li>{' '}
           <li>{keyImpr[13]}</li>{' '}
           <li>{keyImpr[14]}</li>{' '}
           <li>{keyImpr[15]}</li>{' '}
           <li>{keyImpr[16]}</li>{' '}
           <li>{keyImpr[17]}</li>{' '}
           <li>{keyImpr[18]}</li>{' '}
           <li>{keyImpr[19]}</li>{' '}
           <li>{keyImpr[20]}</li>{' '}
           <li>{keyImpr[21]}</li>{' '}
           <li>{keyImpr[22]}</li>{' '}
           <li>{keyImpr[23]}</li>{' '}
           </ul>
           <ul className="keys" onClick={(e) => pushKey(e)}>
           
           <li>{keyImpr[24]}</li>{' '}
           <li>{keyImpr[25]}</li>{' '}
           <li>{keyImpr[26]}</li>{' '}
           <li>{keyImpr[27]}</li>{' '}
           <li>{keyImpr[28]}</li>{' '}
           <li>{keyImpr[29]}</li>{' '}
           <li>{keyImpr[30]}</li>{' '}
           <li>{keyImpr[31]}</li>{' '}
           <li>{keyImpr[32]}</li>{' '}
           </ul>
           
           <ul className='keys' onClick={(e) => pushKey(e)}>
           <li className='space'>&nbsp;</li>{' '}
           
           </ul>        
       </Container>

        
    )
}

export default Keys
