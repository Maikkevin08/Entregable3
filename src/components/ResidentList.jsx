import { useEffect, useState } from "react"
import { paginationLogic } from "../utils/pagination"
import ResidentCard from "./ResidentCard"

//este componente va recibir un prop de residents
const ResidentList = ({residents}) => {
    //console.log(residents)

    const [currentPage, setCurrentPage] = useState(1)
  const {pages, residentInCurrentPage}=paginationLogic(currentPage,residents)

  const handleNewPage=(newPage)=>{
    //console.log(newPage)
    setCurrentPage(newPage)

    //console.log(residentInCurrentPage)
    
  }
  //para escuchar x cambios como de variables o estados por eso se usa un efecto 
  //para la paginacion 
  //[residents]) cada vez q haga cambio de situacion ocurre un currentpage
  //es decir volver a la pagina 1 a la hgora de buscar otro residente
  useEffect(()=>{
    setCurrentPage(1)
  },[residents])
  return (
    <section>
        <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)]
        justify-center maxmin_250 justify-center max-w-[1000px] mx-auto ">
        {/* interpolamos, con map() ya q tenemos ya los arreglos aleatorios del api
        donde luego llamos a residentURL donde esta con nombre de ResidentCARD */}
        {residentInCurrentPage.map((resident)=>(
        <ResidentCard key={resident} residentURL={resident}/>

        ))}
      </section>
    {/* paginacion */}
    <ul className="flex justify-center p-4 gap-6 flex-wrap">
      {
        pages.map((page)=>
        <li key={page}>
          <button className={`${currentPage==page 
            ? "grid bg-green-800 p-2 text-white rounded-md"
            : "bg-black p-2 text-white rounded-md"
            }`}  onClick={()=>handleNewPage(page)} >
            {page}
          </button>
        </li>)
      }
    </ul>

    </section>
  )
}
export default ResidentList