import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export const CreateForm   = ()=>{

    const [user] = useAuthState(auth)

   const navigate =  useNavigate()

const Schema = new yup.ObjectSchema().shape({
    title : yup.string().required("You must add a title"),
    description: yup.string().required("you must add a description"),

})

const {register, handleSubmit,formState : {errors}} = useForm({
    resolver: yupResolver(Schema)
})

const postRef = collection(db,"users-data")

const onSubmit = async (data)=>{
  await  addDoc(postRef,{
    // title : data.title,
    // description : data.descritpion,
    ...data,
    username : user?.displayName,
    userId : user.uid,
  })

  navigate("/")
}

    return (
        <div>
            <div className='flex place-content-center'>
      <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='title...' {...register("title")} className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/>
      <span className='text-red-500 text-center '>{errors.title?.message}</span>
      <textarea type='text' placeholder='Description..' {...register("description")}  className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/> 
      <span className='text-red-500 text-center'>{errors.description?.message}</span>
      <input  type='submit' className="flex m-auto w-80 mt-9 bg-purple-400 rounded-md border-0 py-1.5 p-4 text-white text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" />
      </form>
    </div>
        </div>
    )
}

