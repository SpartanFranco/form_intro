import Form from "./Form";

const ContainerForm = () => {

  return (
    <div className="col-span-2  gap-y-2 lg:max-w-[35rem] p-2 "> 
      <div
      className=" flex items-center justify-center bg-Blue w-full h-fit min-h-[3.7rem] tall:min-h-[5rem] text-white rounded-lg shadow-[0__10px_1px_rgba(0,0,0,.15)] text-center"
        >
         <p className='w-3/5 tall:text-[1rem] text-[.7rem]'>
          <strong>Try it free 7 days </strong>
        then $20/mo. thereafter
        </p>
    </div>
<Form/>
    </div>
  )
}

export default ContainerForm