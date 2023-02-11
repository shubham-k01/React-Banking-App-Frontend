import React , {useState, useEffect} from 'react'
import {Stack,Box, Button} from '@chakra-ui/react'
import {Link , useNavigate} from 'react-router-dom';
import logo from '../logo.png'

const Navbar = () => {
  const [token, setToken] = useState('')
  // const navigate = useNavigate()
  useEffect(() => {
    setToken(localStorage.getItem('authToken'))
  }, [])

  const clicked = ()=>{
    localStorage.removeItem('authToken');
    // The following line is to reload the page so that the token is present or not is checked
    // window.location.reload()
    // But it isn't the way to acheive the result we want here , that is to redirect to home page and navbar should have Login instead of Logout

  // console.log('In clicked');
  }
  
  return (
    <Box display="flex" width="100%" style={{flexDirection:'row',padding:'15px',alignItems:'center',justifyContent:'space-between',backgroundColor:'#333C50'}}>
        <Link to='/'><img src={logo} alt="" /></Link>
        <Stack direction="row">
            <span><Link to='/about'>About Us</Link></span>
            <span><Link to='/register'>Register</Link></span>
            <span>{
              token?
              (<Link to='/' onClick={clicked}>Logout</Link>)
              :(<Link to='/login'>Login</Link>)
              }</span>
            <span>{token? <Link to='/user'><i className="fa-solid fa-circle-user fa-xl" color='#333C50'></i></Link>:''}</span>
        </Stack>
    </Box>
  )
}

export default Navbar