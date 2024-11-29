import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => (
            {...prev, [name]: value}
        ))
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try{
            const { email, password } = formData
            const res = fetch("https://ecommerce-website-reb9.onrender.com/auth/sign-in",{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email, password})
                
            }
            )

            const data = await res.json()
            if(res.ok){
                console.log(res.data)
                localStorage.setItem("authToken", res.data.accessToken)
                localStorage.setItem("userId", res.data.userId)
            } 
            else{
                console.log({submit: data.meessage || "Registration failed"})
            }

        }
        catch(error){

        }
    }
  return (
    <div className='flex justify-between items-center py-10'>
        <div className='hidden md:block'>
            <img src='./assets/signUp.png' alt='signupimage' className='w-full' />
        </div>      
        <div className='md:flex justify-center items-center w-11/12 m-auto md:w-4/5 lg:3/5'>
            <div className='flex flex-col gap-8 md:w-5/6 lg:w-3/5 m-auto'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold lg:text-3xl'>Log in to your account</h1>
                    <p>Enter your details below</p>
                </div>
                <div>
                    <form className='flex flex-col gap-6' onSubmit={handleSumbit}>
                        <input value={formData.email} name='email' type='email' onChange={handleChange} placeholder='Email or Phone Number' className='border-b border-gray-400 py-4 outline-none text-base' />
                        <input value={formData.password} name='password' type='password' onChange={handleChange} placeholder='Password' className='border-b border-gray-400 py-4 outline-none text-base' />
                        <div className='flex justify-between items-center'>
                            <button onClick={() => { return }} className='block w-2/5 bg-white rounded-md text-red-400 text-right py-4'>Forget password</button>
                            <button className='block w-2/5 bg-red-400 rounded-md text-white text-center py-4'>Create Account</button>
                        </div>
                        <button className='block border border-gray-400 rounded-md text-gray-800 text-center py-4'>Sign in with Google</button>
                    </form>
                </div>
                <div className='text-center'>
                    <p>Alreay have account? <Link to="/sign-in" className='underline underline-offset-4'>Log in</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn
