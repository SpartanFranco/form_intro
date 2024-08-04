import ContainerForm from "./components/ContainerForm"


function App() {
  

  return (
    <div
    className="h-screen p-4 bg-[url('./assets/bg-intro-mobile.png')] lg:bg-[url('./assets/bg-intro-desktop.png')] bg-[#ff7978] grid grid-cols-1 lg:flex lg:items-center lg:justify-center"
    >
     <div className=" lg:text-left text-center text-white lg:w-[40%]">
      <h1 className="tall:mt- text-[1.6rem] font-bold lg:text-[4rem] ">
        Learn to code by
        <br />
        watching others
      </h1>
       <p className=" text-[.7rem] tall:text-[1rem]  lg:text-[1.4rem] lg:w-[90%] ">
        See how experienced developers solve problems in real-time. 
        Watching scripted tutorials is great,but understanding how 
        developers think is invaluable
       </p>
       
     </div>
     <ContainerForm/>
    </div>
  )
}

export default App
