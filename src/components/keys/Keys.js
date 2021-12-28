import React from 'react'
import "./Keys.css";
import Container from 'react-bootstrap/Container';

const pushKey = (e) => {

    let key = e.target.innerText;
    console.log(key);
}


function Keys() {
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
           <li>ё</li>{' '}
           <li>й</li>{' '}
           <li>ц</li>{' '}
           <li>у</li>{' '}
           <li>к</li>{' '}
           <li>е</li>{' '}
           <li>н</li>{' '}
           <li>г</li>{' '}
           <li>ш</li>{' '}
           <li>щ</li>{' '}
           <li>з</li>{' '}
           <li>х</li>{' '}
           <li>ъ</li>{' '}
           </ul>
          
              <ul className="keys" onClick={(e) => pushKey(e)}>
           <li className='bloqMayus'>bloq mayus</li>{' '}
           <li>ф</li>{' '}
           <li>ы</li>{' '}
           <li>в</li>{' '}
           <li>а</li>{' '}
           <li>п</li>{' '}
           <li>р</li>{' '}
           <li>о</li>{' '}
           <li>л</li>{' '}
           <li>д</li>{' '}
           <li>ж</li>{' '}
           <li>э</li>{' '}
           </ul>
           <ul className="keys" onClick={(e) => pushKey(e)}>
           
           <li>я</li>{' '}
           <li>ч</li>{' '}
           <li>с</li>{' '}
           <li>м</li>{' '}
           <li>и</li>{' '}
           <li>т</li>{' '}
           <li>ь</li>{' '}
           <li>б</li>{' '}
           <li>ю</li>{' '}
           </ul>
           
           <ul className='keys' onClick={(e) => pushKey(e)}>
           <li className='space'>{' '}</li>{' '}
           
           </ul>        
       </Container>

        
    )
}

export default Keys
