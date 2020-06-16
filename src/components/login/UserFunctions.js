import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export const register = user => {
    return axios
        .post('http://localhost:5000/users/register', {
            username: user.username,
            phone: user.phone,
            email: user.email,
            password: user.password,
            name: user.name,
            address: user.address,
            status: user.status,
        })
        .then(res => {
            if(res.data.status==true){
                // alert(res.data.data)
                toast(res.data.data, {position: toast.POSITION.TOP_CENTER});
                }
                else if(res.data.status==false){
                    // alert(res.data.error)
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER});
                }  
        })
}

export const login = user => {
    return axios
        .post('http://localhost:5000/users/login', {
            username: user.username,
            password: user.password,
            status: user.status,
        })
        .then(res => {
            if(res.data.status==true){
            console.log('Login!')
            // alert("Login Successful")
            toast("Login Successful", {position: toast.POSITION.TOP_CENTER});
            localStorage.setItem('usertoken',res.data.accesstoken)
            return res.data.accesstoken
            }
            else if(res.data.status==false){
                // alert(res.data.error)
                toast(res.data.error, {position: toast.POSITION.TOP_CENTER});

            }
        })
        .catch(err => {
            // alert(err)
            toast(err, {position: toast.POSITION.TOP_CENTER});

        })
}

