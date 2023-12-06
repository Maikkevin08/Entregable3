import axios from "axios"
import "./styleLocation.css"

//recibimos la props como parametros con el mismo 
const Location = ({locationInfo, setLocationInfo}) => {
    //console.log(locationInfo)

    //creamos una funcion evento
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newLocationID=e.target.newLocation.value
        console.log(e.target.newLocation.value)

        axios.get(`https://rickandmortyapi.com/api/location/${newLocationID}`)
        .then(({data})=>setLocationInfo(data))
        .catch((err)=>console.log(err))
    }
    //bg-black/60 text-white text-base font-medium font-firaCode border-green-400 
    //border-2 pt-2 pb-2 pl-6 pr-6
  return (
    <section className="grid justify-center  ">
        <div className=" ">
            <img className=" absolute flex justify-center w-[800px] h-[360px] -top-[150px] max-lg:w-[540px] max-sm:w-[330px]  left-1/2 
                -translate-x-1/2" src="./portal.svg" alt="" />
            <img className="absolute top-[100px] left-1/2 
                -translate-x-1/2 w-[350px] max-sm:w-[330px] max-lg:w-[340px] h-auto mx-auto" src="./name.svg" alt="" />
        </div>
        
        <form className="flex justify-center items-center" onSubmit={handleSubmit} >
            <div className="flex justify-center items-center  mt-64" > 
             <input className=" max-sm:w-[200px] text-base border-green-800 border-2 pt-2 pb-2 pl-5 pr-10 rounded-md"
             type="text" 
             name="newLocation"
             placeholder="Type a loxation ID ..." />
             <button className="bg-green-800  p-2 text-white rounded-md">Search <span></span> </button>
            </div>
        </form>
        <div className="flex justify-center p-8"> 
        <article className="flex flex-col gap-4 justify-center  border-2 border-green-800 
                            items-center max-sm:w-[350px]  max-w-[900px] pt-5 pb-5 pl-8 pr-8">
            <h2 className="text-green-800 text-xl ">Welcome to {locationInfo?.name}!</h2>
            <ul className="max-sm:hidden flex gap-9">
                <li className="text-black/50 text-sm font-semibold font-firaCode"><span className="text-green-800">Type:</span> {locationInfo?.type}</li>
                <li className="text-black/50 text-sm font-semibold font-firaCode"><span className="text-green-800">Dimension:</span> {locationInfo?.dimension}</li>
                <li className="text-black/50 text-sm font-semibold font-firaCode"><span className="text-green-800">Population:</span> {locationInfo?.residents.length}</li>
            </ul>
        </article>
        </div>
        
    </section>
  )
}
export default Location