import React , {useState,useRef, useEffect} from 'react'
import Navbar from './Navbar'
import login from '../login.jpg'
import {Box, Heading, Stack, FormControl,FormLabel,FormErrorMessage,FormHelperText, Input, Button} from '@chakra-ui/react'
import { Link ,useNavigate} from 'react-router-dom'
import {newUser, loginUser} from '../utils/fetchData'

const Login = () => {
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const navigate = useNavigate()

    const submitForm = async()=>{
        const email = emailRef.current.value;
        const password = passRef.current.value;

        const data ={email,password};
        // console.log(data);
        const res = await loginUser(data);
        if(res.authToken){
            
            localStorage.setItem('authToken',res.authToken)
            navigate('/user')
        }
        else{
            navigate('/error',{state:{msg:res.response.data.msg}})
        }

    }
    
    const st ={marginTop:'10px',color:'#000',marginBottom:'10px',width:{sm:'100%',md:'275px'},borderRadius:'5px'}
  return (
    <Box bg='#b8cee2' height='100vh'>
    <Navbar/>
    <Box width='75%' bg='#333C50' style={{height:'68.5%',margin:'auto',marginTop:'50px',display:'flex',flexDirection:{md:'row',base:'column'},justifyContent:'space-around'}}>
        <Box  style={{padding:'20px'}}>
            <Heading as='h2' style={{fontSize:'30px'}}>
                Login
            </Heading>
            <Stack flexDirection='column' spacing='10'>
                <FormControl style={{margin:'35px'}}>
                    {/* <FormErrorMessage>{err.name}</FormErrorMessage> */}
                    <FormLabel>Email:</FormLabel>
                    <Input type='email' name='email' id='email' style={st} ref={emailRef} required/>
                    {/* <FormErrorMessage>{err.email}</FormErrorMessage> */}
                    <FormLabel>Password:</FormLabel>
                    <Input type='password' name='password' id='password' style={st} ref={passRef} required/>
                    {/* <FormErrorMessage>{err.password}</FormErrorMessage> */}
                    <Button colorScheme='blue' width='75px' mt='10px' style={{display:'block'}} onClick={submitForm}>Submit</Button>
                </FormControl>
            </Stack>
        </Box>
        <Box height={['0','100%','100%']} width={['0','100%','100%']}>
            <img src={login} alt="" style={{mt:'15px',color:'#fff',width:'100%',height:'100%'}}/>
        </Box>
    </Box>
    </Box>
  )
}

export default Login