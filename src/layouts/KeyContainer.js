import React from 'react'
import Container from 'react-bootstrap/Container';
import Keys from '../components/keys/Keys';
import Screen from '../components/Screen';

function KeyContainer() {
    return (
        <Container style={{ backgroundColor: '#f5f5f5', padding:"0 70px", maxWidth:"960px", marginTop:"10px", borderRadius:"10px" }}>  
          
        <Screen/>
        <Keys/>        
        
      </Container>
    )
}

export default KeyContainer
