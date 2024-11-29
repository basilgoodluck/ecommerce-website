import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {}
        
        if(!formData.name.trim()){
            newErrors.name = "Name is required";
        }
        if(!formData.email.trim()){
            newErrors.email = "Email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
            newErrors.email = "Email is invalid"
        }
        if(!formData.password){
            newErrors.password = "Password is required"
        }
        else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        try{
            if(!validateForm()) return
            setIsLoading(true)
            const { name, email, password, confirmPassword } = formData;
            const response = await fetch("https://ecommerce-website-reb9.onrender.com/auth/sign-up", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ name, email, password})
            })

            const data = await response.json()

            if(response.ok){
                console.log("sumiii")
                navigate("/sign-in")
            } 
            else{
                setErrors({submit: data.meessage || "Registration failed"})
            }

        }
        catch(error){
            setErrors({submit: "Error occured"})
        }
        finally{
            setIsLoading(false)
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
                    <h1 className='text-xl font-semibold md:text-2xl'>Create an account</h1>
                    <p className='text-sm'>Enter your details below</p>
                </div>
                <div>
                    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type='name'
                            name='name'
                            placeholder='Name' 
                            onChange={(e) => setFormData({...formData, name: e.target.value})} 
                            className={`w-full border-b py-4 outline-none text-sm ${errors.name ? "border-red-400" : "border-gray-400"}`} />
                            {errors.name && <p className='text-xs text-red-600'>{errors.name}</p>}
                        </div>
                        <div>
                            <input 
                            type='email'
                            name='email'
                            placeholder='Email' 
                            onChange={(e) => setFormData({...formData, email: e.target.value})} 
                            className={`w-full border-b border-gray-400 py-4 outline-none text-sm ${errors.email ? "border-red-400" : "border-gray-400"}`} />
                            {errors.email && <p className='text-xs text-red-600'>{errors.email}</p>}
                        </div>
                        <div>
                            <input 
                            type='password'
                            name='password'
                            placeholder='Password' 
                            onChange={(e) => setFormData({...formData, password: e.target.value})} 
                            className={`w-full border-b border-gray-400 py-4 outline-none text-sm ${errors.password ? "border-red-400" : "border-gray-400"}`} />
                            {errors.password && <p className='text-xs text-red-600'>{errors.password}</p>}
                        </div>
                        <div className='w-full'>
                            <input 
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirm Password' 
                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
                            className={`w-full border-b border-gray-400 py-4 outline-none text-sm ${errors.confirmPassword ? "border-red-400" : "border-gray-400"}`} />
                            {errors.confirmPassword && <p className='text-xs text-red-600'>{errors.confirmPassword}</p>}
                        </div>
                        <button disabled={isLoading ? true : false} className={`block transition ${isLoading ? "bg-gray-200" : "bg-red-400"}  rounded-md text-white text-center py-4 text-sm`}>Create account</button>
                        <button className='block border border-gray-400 rounded-md text-gray-800 text-center py-4 text-sm'>Sign up with Google</button>
                    </form>
                </div>
                <div className='text-center text-sm'>
                    <p>Already have account? <Link to="/sign-in" className='underline underline-offset-4'>Log in</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
