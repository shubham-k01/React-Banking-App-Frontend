import { Box,Heading, Text, Button} from '@chakra-ui/react'
import React , {useEffect,useLayoutEffect,useState} from 'react'
import { useNavigate } from 'react-router'
import { getInfo,getTra } from '../utils/fetchData'
import Navbar from './Navbar'

const UserPanel = (props) => {

  const [data, setData] = useState('')
  const [transac, setTransac] = useState({})
  const navigate = useNavigate();
  useLayoutEffect(()=>{
    const start = async()=>{
      const authToken = localStorage.getItem('authToken');
      if(!authToken){
        navigate('/error')
      }
      else{
        const res = await getInfo(authToken);
        setData(res);
        // console.log(res);
        const tr = await getTra(authToken);
        setTransac(tr.transactions);
      }
    }
    start()
  },[])

  const clicked = ()=>{
    navigate('/tran')
  }
  return (
    <Box >
      <Navbar user={props.user}/>
      <Box bg='#b8cee2'  height='100%' paddingTop='25px'>
        <Box width={['35%','45%','50%']}  style={{display:'flex',backgroundColor:'#333C50',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',margin:'auto',padding:'30px',borderRadius:'25px'}}>
          <Heading fontSize='45px' textAlign='left'>
            Hi {data.name},
          </Heading>
          <Text fontSize='20px' style={{paddingTop:'15px'}}>
            Your account information:
          </Text>
          <Box mt='15px'>

          <Text>
            Email : {data.email}
          </Text>
          <Text>
            Account Number : {data.acc}
          </Text>
          <Text>
            Balance : {data.balance}
          </Text>
          </Box>
        </Box>
        <Box width={['35%','45%','55%']} style={{margin:'auto',marginTop:'30px',borderRadius:'30px',backgroundColor:'#333C50'}}>
          <Box  style={{display:'flex',padding:'15px',alignItems:'flex-start',flexDirection:'column'}}>
              <Heading fontSize='35px'>Transactions</Heading>
              {Object.keys(transac).length>0?

              transac.map(tra=>{
                for(var i=0;i<Object.keys(transac).length;i++){
                    return (
                      <Box key={tra._id} flexDirection={['column','column','row']} style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'5px'}}>
                        <Text>Transferred to: {tra.emailTwo}</Text>
                        <Text pl='15px'>Amount: {tra.amt}</Text>
                        <Text pl='15px'>Date: {new Date(tra.date).toUTCString()}</Text>
                      </Box>
                    )

                }
              }):
              'No transactions done'
            }
          </Box>
        </Box>
        <Box style={{display:'flex',marginTop:'20px'}}>
          <Button colorScheme='blue' style={{margin:'auto',marginTop:'15px'}} onClick={clicked}>Transfer Money</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default UserPanel