import axios from "axios";


const API_URI="http://192.168.92.135:5000/api"


const API=axios.create({
    baseURL:API_URI,
    headers:{
        "Content-type":"application/json"
    }
})

API.interceptors.request.use(async(req)=>{

    if(localStorage.getItem("Token")){
        const token=localStorage.getItem("Token")
        req.headers.Authrization=`Bearer ${token}`
    }
    return req;
})

export default API;