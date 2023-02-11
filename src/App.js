import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import './App.css'
import UserPanel from './components/UserPanel'
import About from './components/About'
import Login from './components/Login'
import Error from './components/Error'
import Sample from './components/Sample'
import Transactions from './components/Transactions'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/user' element={<UserPanel/>}/>
        <Route exact path='/register' element={<Signup/>}/>
        <Route exact path='/sample' element={<Sample/>}/>
        <Route exact path='/error' element={<Error/>}/>
        <Route exact path='/tran' element={<Transactions/>}/>

        </Routes>
      </Router>
    </ChakraBaseProvider>
  )
}

export default App;
