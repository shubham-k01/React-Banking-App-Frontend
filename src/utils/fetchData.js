import axios from 'axios';
// const baseUrl = 'https://baybank-api.vercel.app'
// const baseUrl = 'http://localhost:5000'
const baseUrl = 'https://baybank-backend-production.up.railway.app'


// register
export const newUser = async(inp)=>{

    console.log(inp);

    const sampleInp = {
        "name":"Jack",
        "email":"jack@gmail.com",
        "balance":18000,
        "password":"19524"
    }

    // throwing a request
    const {name,email,password,balance} = inp;
    try {
        // Method 1 :  Using axios.post(), we pass the body data simply as a parmater in the function 
        // const res = await axios.post(baseUrl,{name,email,password,balance})
        // const data = await res.data;
        // return data;


        // Method 2: When using axios.request() method , specify the body data in the data attribute and not as the body attribute
        const res = await axios.request(`${baseUrl}/user`,{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            data:{name,email,password,balance}
        })
        const data = await res.data;
        return data;

        // Method 3 : SImply using fetch API , we can fetch the data from the server side
        // const response = await fetch(baseUrl, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({name,email,password,balance})
        //   });
        //   const data = await response.json();
        //   return data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// login
export const loginUser = async(inp)=>{
    const {email,password} = inp;
    try {
        const res = await axios.request(`${baseUrl}/auth/login`,{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            data:{email,password}
        })
        const data = res.data;
        // console.log(data);
        return data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

// get all info
export const getInfo = async(authToken)=>{
    try {
        const res = await axios.request(`${baseUrl}/user/fet`,{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'authorization':`Bearer ${authToken}`
            }
        })
        const data = res.data;
        // console.log(data);
        return data;
    } catch (error) {
        // console.log(error);
        return error;
    }

}

// get transactions
export const getTra = async(authToken)=>{
    try {
        const allTra = await axios.request(`${baseUrl}/user/alltra`,{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${authToken}`
            }
        })
        const data = allTra.data
        // console.log(data);
        return data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

// perform transaction
export const tran = async(inp)=>{
    const {transferTo,amt} = inp
    try {
        const authToken = localStorage.getItem('authToken')
        // const user = await getInfo(token)
        // const email = user.email
        const transaction = await axios.request(`${baseUrl}/user/tran`,{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${authToken}`
            },
            data:{transferTo,amt}
        })
        const data = transaction.data;
        // console.log(data);
        return data;
    } catch (error) {
        // console.log(error)
        return error;
    }
}



