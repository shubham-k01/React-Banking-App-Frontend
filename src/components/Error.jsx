import { Box ,Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import errorP from '../errorP.jpg'

const Error = () => {
  const location = useLocation() // used to access the state passed from another component
  return (
    <Box height='90vh'>
    <Navbar/>
    <Box bg='#b8cee2' height='100%' style={{padding:'25px',display:'flex',justifyContent:'center'}}>
        <Box  width='50%' borderRadius='15px' style={{margin:'auto',padding:'15px',display:'flex',backgroundColor:'#333C50',flexDirection:'column',alignItems:'center'}}>
          <Heading textAlign='center' as='h2' style={{fontSize:'35px'}}>
            ERROR
          </Heading>
          <Text fontSize='25px' paddingBottom='15px'>
            {location.state.msg ? location.state.msg : ""}
          </Text>
          <Box height={['0%','5%','30%']} width={['50%']} >
            <img src={errorP} alt="" />
          </Box>
        </Box>
    </Box>
    
    </Box>
  )
}

export default Error


// width={['30%','75%','80%']} height={['35%','40%','45%']}
// width={['80%','55%','65%']} height={['40%','60%','65%']}