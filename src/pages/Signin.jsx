import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import amazon from '../assets/amazon-logo.png'
import {Link} from 'react-router-dom'

// import Amazon from '../assets/amazon-logo'
function Signin() {
    const [name,setName]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [error,setError]=React.useState('');
    const navigate = useNavigate();

    const signinClick = (e)=> {
        e.preventDefault();

        const usernameValidation=(username)=>{
            const usernameValid = 5
            return username.length >= usernameValid
        }
        const emailValidation=(email)=>{
            const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email)
        }
        const passwordValidation=(password)=>{
            const passValid=6
            return password.length >= passValid
        }

        if(!usernameValidation(name)){
            setError("Name must be at least 5 characters")
            return;
        }
        if(!emailValidation(email)){
            setError("please ensure your email is correctly (e.g, name@domail.com)")
            return
        }
        if(!passwordValidation(password)){
            setError("Password must be at least 6 number or charaters")
            return;
        }
        setError("")

        axios.get("https://66804b9b56c2c76b495bb562.mockapi.io/api/users")
        .then((res)=>{
            const users =res.data;
            const emailExisis= users.some(
                e => e.email===email)

            if(emailExisis){
                setError("email Already exist")
                return
            }
            axios.post("https://66804b9b56c2c76b495bb562.mockapi.io/api/users",{
                name,
                email,
                password,
            }).then(()=>{
                navigate("/login")
            })
        })        
    }
    
    return(

        <>
<div className="flex justify-center">
    <img className="w-[10vw]" src={amazon} />

</div>
<div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
            <form action="">
               <div className="relative mt-6">
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name="text" id="text" placeholder="name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                    <label for="text" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Name</label>
                </div>
                <div className="relative mt-6">
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div className="relative mt-6">
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <div className="flex justify-center">
                    {error && <p style={{color: "red"}}>{error}</p>}

                </div>
                <div className="my-6 flex justify-center">
                    <button onClick={signinClick} type="submit" className="w-[10vw] h-[8vh] rounded-md bg-[#e2b727] px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                </div>
                <p className="text-center text-sm text-gray-500">Back Home?
                    <Link to="/"><p className="font-semibold text-blue-600 hover:underline focus:text-gray-800 focus:outline-none">Home
                    </p></Link>
                </p>
            </form>
        </div>
    </div>
</div>
        </>
    )
}
export default Signin