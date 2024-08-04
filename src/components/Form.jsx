import { useForm } from "react-hook-form"
import errorIcon from '../assets/icon-error.svg'
import { useEffect } from "react"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitSuccessful },
    reset
  } = useForm()
  const isSubmit = (data) =>console.log(data)
 
 
useEffect(() => {
  
   if(isSubmitSuccessful){
    reset()
   }
  
}, [isSubmitSuccessful])

const handleReset=()=>isSubmitSuccessful&&reset()
  return (
    <form
    className="p-5  lg:p-10 bg-white mt-4 text-center rounded-2xl shadow-[0__10px_1px_rgba(0,0,0,.15)] " 
    onSubmit={handleSubmit(isSubmit)}
    >
       <div className={`mt-2 w-full flex flex-col items-center relative `}>
       <input
      className={` h-[3rem] lg:h-[4rem] w-full  text-text-input border-2 ${errors.firstName?'border-Red':'border-slate-300'} rounded-[.3rem] pl-6 font-bold ` }
       type="text"
       {...register('firstName',{required:true})}
       placeholder={errors.firstName?'':"Firts Name"} 
       /> 
        {errors.firstName&&(
        <>
        <img 
          className='w-8 absolute right-4 top-2 lg:top-4 '
        src={errorIcon} alt="image"
        />  
         <p className='text-Red text-[.8rem] lg:text-[1rem] flex justify-end w-full'>
          <em>First Name cannot by empty</em>
          </p>
        </>
        )
        }
          </div>
    
    <div className={`w-full ${!errors.firstName&&'mt-3'} lg:mt-5 flex flex-col items-center relative `}>
       <input
       className={` h-[3rem] lg:h-[4rem] w-full  text-text-input border-2 ${errors.lastName?'border-Red':'border-slate-300'} rounded-[.3rem] pl-6 font-bold ` }
       type="text"
       {...register('lastName',{required:true})}
       placeholder={errors.lastName?'':"Last Name"}
        />
         {errors.lastName&&(
        <>
        <img 
          className='w-8 absolute right-4 top-2 lg:top-4 '
        src={errorIcon} alt="image"
        />  
         <p className='text-Red text-[.8rem] lg:text-[1rem] flex justify-end w-full'>
          <em> Last Name cannot by empty </em>
          </p>
        </>
        )
        }
          </div>

      <div className={` w-full ${!errors.lastName&&'mt-3'} lg:mt-5 flex flex-col items-center relative h-auto`}>
          <input
         className={`h-[3rem] lg:h-[4rem] w-full  text-text-input ${errors.email&&': placeholder-Red'} border-2 ${errors.email?'border-Red':'border-slate-300'} rounded-[.3rem] pl-6 font-bold ` }
         type="email"
       {...register('email',{
        required:true,
        pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}
      })}
       placeholder={errors.email?'email@example/com':"Email Address"}
        />
          {errors.email&&(
        <>
        <img 
          className='w-8 absolute right-4 top-2 lg:top-4 '
        src={errorIcon} alt="image"
        />  
          <p className='text-Red text-[.8rem] lg:text-[1rem] flex justify-end w-full'>
          <em> Looks like this is not an email</em>
          </p>
        </>
        )
        }
          </div>

    <div className={`w-full ${!errors.email&&'mt-3'} lg:mt-5 flex flex-col items-center relative h-auto `}>
       <input
    className={`h-[3rem] lg:h-[4rem] w-full  text-text-input border-2 ${errors.password?'border-Red':'border-slate-300'} rounded-[.3rem] pl-6 font-bold ` }
       type="password"
       {...register('password',{required:true})}
       placeholder={errors.password?'':"Password" }
       />
       {errors.password&&(
        <>
          <img  
             className='w-8 absolute right-4 top-2 lg:top-4 '
            src={errorIcon} alt="image"
            />  
          <p className='text-Red text-[.8rem] lg:text-[1rem] flex justify-end w-full'>
             <em> Password cannot by empty</em>
          </p>
        </>
        )
        }
  </div>
        
        <div className='w-full h-fit '>
       <button className="text-[.7rem] lg:text-[1rem] bg-Green  : hover:bg-green-300  w-full h-[3rem] lg:h-[4rem] rounded-lg font-bold text-white shadow-[inset_0_-7px_2px_#96929288] mt-3"
        onClick={handleReset}
        >
           CLAIM YOUR FREE TRIAL
       </button>
       </div>
        <p className='text-gray-400 px-6 lg:mt-5 text-[.7rem] lg:text-[1rem] lg:w-full lg:px-4'>
          By clicking the button you are agreeing to our <strong className="text-red-400">Terms and services
            </strong>
        </p>
   </form>
  )
}

export default Form