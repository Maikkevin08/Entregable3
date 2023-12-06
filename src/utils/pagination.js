//este archivo es para la paginacion
const paginationLogic=(currentPage,residents)=>{

    //CANTIDAD DE RESIDENTES POR PAGINA
const RESIDENTS_PER_PAGE=20

//saber la cantida de total paginas.... el math.ceil() redondea hacia arriba por q no puede haber en decimal
const totalPages=Math.ceil(residents.length/RESIDENTS_PER_PAGE)

//residentes que se van a mostrar en la pagina actual
//con este metodo slice vamos a obtener 20 residentes para la primera pagina
const sliceEnd=currentPage*RESIDENTS_PER_PAGE
const sliceStart=sliceEnd-RESIDENTS_PER_PAGE
const residentInCurrentPage=residents.slice(sliceStart, sliceEnd)
//generacion dearreglo con los numeros de las paginas q se van mostrar
const pages=[]
for(let i=1;i<= totalPages; i++){
    pages.push(i)
    
}
return {pages, residentInCurrentPage}

}
export {paginationLogic}
