import React,{useState ,useRef} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import Navbar from './Navbar'
import {tran} from '../utils/fetchData'

const Transactions = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const navigate = useNavigate()
    const st ={marginTop:'10px',color:'#000',marginBottom:'10px',width:{sm:'100%',md:'275px'},borderRadius:'5px'}

    const submitForm = async()=>{
        const transferTo = ref1.current.value;
        const amt = ref2.current.value;
        const data = await tran({transferTo,amt});
        // console.log(data);
        if(data.success){
            ref1.current.value="";
            ref2.current.value="";
            ref3.current.style.display='block'
            setTimeout(()=>{
                ref3.current.style.display='none'
            },8000);
        }
        else{
            // In order to pass the data when using navigate we do it by passing an object containing state as the second parameter
            // In axios error we get error->response->data->msg
            navigate('/error',{state:{msg:data.response.data.msg}})  
        }

    }
  return (
    <Box height='100vh'>
    <Navbar/>
    <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    // display='block'
    display='none'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='150px'
    color='black'
    bg = '#c6ffb3'
    paddingTop='15px'
    ref={ref3}
    >
    <AlertIcon boxSize='40px' margin='auto' style={{color:'green'}} />
    <AlertTitle mt={4} mb={1} fontSize='lg' color='black'>
        Money Transferred!
    </AlertTitle>
    <AlertDescription maxWidth='sm' color='black'>
        Thanks for using our services.
    </AlertDescription>
    </Alert>
    <Box bg='#b8cee2' color='#fff' height='89%' paddingTop='15px' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Box width={['300px','450px','480px']} style={{padding:'20px',backgroundColor:'#333C50',borderRadius:'15px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Heading as='h2' style={{fontSize:'30px'}}>
                Transfer Money
            </Heading>
            <Stack flexDirection='column' spacing='10'>
                <FormControl style={{margin:'35px'}}>
                    <FormLabel>Transfer To:</FormLabel>
                    <Input type='email' name='transferTo' id='transferTo' style={st} required ref={ref1}/>
                    <FormLabel>Amount:</FormLabel>
                    <Input type='number' name='amt' id='amt' style={st} required ref={ref2}/>
                    <Button colorScheme='blue' width='75px' mt='10px' style={{display:'block'}} onClick={submitForm}>Submit</Button>
                </FormControl>
            </Stack>
        </Box>
    </Box>
    </Box>
  )
}

export default Transactions