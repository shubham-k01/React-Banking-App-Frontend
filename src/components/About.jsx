import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <Box >
      <Navbar/>
      <Box bg='#b8cee2'  height='100%' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

      <Box bg='#333C50' style={{margin:'35px',padding:'15px',borderRadius:'15px'}}>
          <Heading fontSize='30px'>About Us</Heading>
          <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </Text>
          <Box margin='15 '>
          <img src="https://cdn.pixabay.com/photo/2016/12/22/18/20/skyline-1925943_960_720.jpg" alt="" />
          </Box>
      </Box>
      </Box>
    </Box>
    
  )
}

export default About