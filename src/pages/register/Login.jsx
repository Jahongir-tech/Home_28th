import { request } from '@/api'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '@/redux/slices/token-slice'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IoEyeOutline, IoEyeOffOutline  } from "react-icons/io5";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required()

const Register = () => {
  const [eye, setEye] = useState({
    password: false,
  }) 
  const dipatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  })
  console.log(watch("password"));
  
  const onSignUp = data => {
    request
      .post("/auth/signin-customer", data)
      .then(res => {
        console.log(res);
        dipatch(signIn(res.data.access_token))
        localStorage.setItem("id", res.data.id)
        navigate("/")
      })

  }
  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-[850px]:grid-cols-1'>
      <div className='bg-login bg-cover max-[850px]:hidden bg-center bg-no-repeat'></div>
      <div className='flex max-[1100px]:p-10 max-[500px]:p-5 items-center pl-[87px]'> 
        <form onSubmit={handleSubmit(onSignUp)} className='max-w-[456px] max-[850px]:max-w-full w-full'  action="">
          <p className='text-[40px] font-medium mb-6'>Sign In</p>
          <p className='text-slate-400 mb-8'>
            Already have an account? 
            <Link className='text-green-500' to={"/register"}> Sign up</Link>
          </p>
          <label className='block mb-8 max-[500px]:mb-4' htmlFor="">
            <input {...register("email")} type="email" className='w-full border-b h-10 outline-none focus:border-green-500' placeholder='Email' />
            {
              errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>
            }
          </label>
          <label className='block mb-8 max-[500px]:mb-4' htmlFor="">
           <div className='relative '>
            <input {...register("password")} type={eye.password ? "text" : "password"} className='w-full border-b h-10 outline-none focus:border-green-500' placeholder='Password' />
            {
              watch("password") && 
            <span onClick={()=> setEye(prev => ({...prev, password: !prev.password}))} className='absolute select-none top-[50%] translate-y-[-50%] right-0 text-xl cursor-pointer'>
              {
                eye.password ? 
                <IoEyeOffOutline/>
                :
                <IoEyeOutline/>
              }
            </span>
            }
           </div>
            {
              errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>
            }
          </label>
        
          <button className='w-full h-12 mt-8 max-[500px]:mt-4 bg-black text-white rounded-md hover:opacity-70'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Register