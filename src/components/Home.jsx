import React from 'react'
import { Heading, Box,Stack,Button, Card, CardBody, Image, Text, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Box bg='#b8cee2'>
        {/* In order to make the web design responsive we need to specify the property values of the particular property outside the style tag as an array according to the breakpoints in Chakra Ui */}
        <Box paddingBottom={['10px','15px','25px']} height={['980px','800px','500px']} style={{background:'linear-gradient(90deg, rgba(184,206,226,0.4) 0%, rgba(184,206,205,0.4) 100%),url(https://cdn.pixabay.com/photo/2016/12/22/18/20/skyline-1925943_960_720.jpg)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',opacity:'0.7'}}>
            <Box style={{paddingTop:'25px',display:'flex',flexDirection:'column',alignItems:'center',margin:'auto'}}>
                <Heading as='h1' style={{fontSize:'80px',textAlign:'center'}}>
                    Welcome to BayBank
                </Heading>
                <p style={{textAlign:'center',margin:'50px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <Button colorScheme='blue'><Link to='/register'>Get Started</Link></Button>
            </Box>
        </Box>
        <Box>
            <Heading as='h1' textAlign='center' style={{fontSize:'50px'}}>
                Our Services
            </Heading>
            <Box  width='85%' margin='auto'>

            <Stack flexDirection='row' style={{justifyContent:'space-evenly'}}>
                <Card maxW='sm' width='350px' padding='10px' margin='5px' bg='#333C50'>
                <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Check bank Balance</Heading>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                <Button variant='solid' mt='5' colorScheme='blue'>
                Register
                </Button>
                </CardFooter>
                </Card>
                
                <Card maxW='sm' width='350px' padding='10px' margin='5px' bg='#333C50'>
                <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Transfer Money</Heading>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                <Button variant='solid' mt='5' colorScheme='blue'>
                Register
                </Button>
                </CardFooter>
                </Card>


                <Card maxW='sm' width='350px' padding='10px' margin='5px' bg='#333C50'>
                <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>View all transactions</Heading>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                <Button variant='solid' mt='5' colorScheme='blue'>
                    Register
                </Button>
                </CardFooter>
                </Card>
            </Stack>
            </Box>
        </Box>
        <Footer/>
    </Box>
    </>
  )
}

export default Home