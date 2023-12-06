//este componnete el url donde se va realizar la peticion
import axios from "axios"
import {useEffect, useState} from "react"
const ResidentCard = ({residentURL}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    //creamos un objeto para  los estatus ya q hay 3 propiedades: Alive, Dead y unknown
    const status={
        Alive: "bg-green-500",
        Dead:"bg-red-500",
        unknown:"bg-slate-500"
    }

    //por cada componente va hacer su peticion q va mostrar 
    useEffect(()=>{
        axios.get(residentURL)
        .then(({data})=>setResidentInfo(data))
        .catch((err)=>console.log(err))
    },[])
    return (
    <article className="  border-2 border-green-800 hover:bg-green-300">
        <header className="relative">
            <img src={ residentInfo?.image} alt="" />
            <div className ="flex items-center gap-2 absolute bottom-8 
            left-1/2 -translate-x-1/2 bg-black/50 text-white p-1 px-2 border-2 border-green-400 text-white">
                <div className={ `h-3 aspect-square rounded-full 
                ${status[residentInfo?.status]}`}>
                </div>
                <span>{ residentInfo?.status} </span>
            </div>
        </header>
        <section >
            <h5 className="text-black/50 text-sm font-semibold font-firaCode"> <span className="text-green-800"> Resident Name:</span> { residentInfo?.name}</h5>
            <ul >
                <li className="text-black/50 text-sm font-semibold font-firaCode"><span className="text-green-800">Species:</span> { residentInfo?.species}</li>
                <li className="text-black/50 text-sm font-semibold font-firaCode"><span className="text-green-800">Origin:</span> { residentInfo?.origin.name}</li>
                <li className="text-black/50 text-sm font-semibold font-firaCode"><span className="text-green-800">Times appear:</span>{ residentInfo?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard