import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"
import { useToggle } from '../Hooks/useToggle';

export const Contact = () => {

  const [isVisible,Toggle] = useToggle()

  const Schema = new yup.ObjectSchema().shape({
    Fullname :  yup.string().required(),
    Email : yup.string().email().required(),
    Mobile : yup.number().integer().positive().required(),
    password : yup.string().min(6).max(10).required(),
    confirmpassword : yup.string().oneOf([yup.ref("password"), null,"Password doest match!!"]).required(),
  })

  const {register,handleSubmit, formState : {errors}} = useForm({
    resolver : yupResolver(Schema),
  })

  
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="h-min-screen">
    <div className='flex place-content-center'>
      <form className='text-center' onClick={handleSubmit(onSubmit)}>
      <input type='text' placeholder='FullName' className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" {...register("Fullname")} />
      <span className='text-red-500 text-center '>{errors.Fullname?.message}</span>
      <input type='email' placeholder='Email' className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" {...register("Email")} /> 
      <span className='text-red-500 text-center'>{errors.Email?.message}</span>
      <input type='number' placeholder='Mobile' className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" {...register("Mobile")}/> 
      <span className='text-red-500 text-center'>{errors.Mobile?.message}</span>
      <input type='password' placeholder='password' className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" {...register("password")}/> 
      <span className='text-red-500 text-center'>{errors.password?.message}</span>
      <input type='password' placeholder='confirm password' className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" {...register("confirmpassword")}/> 
      <span className='text-red-500 text-center'>{errors.confirmpassword?.message}</span>
      <input  type='submit' className="flex m-auto w-80 mt-9 bg-purple-400 rounded-md border-0 py-1.5 p-4 text-white text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" />
      </form>
    </div>
    
    <div className='flex flex-col place-content-center'>
      <button className="flex m-auto w-64 my-6 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-voilet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple-500" onClick={Toggle}>{isVisible? "Hide" : "Show"}</button>
        {isVisible && <h4 className='text-center'>Thanks for clicking, click again to hide!</h4>}
      </div>
    </div>
  )
}

