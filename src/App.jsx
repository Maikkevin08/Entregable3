import axios from "axios";
import { useEffect, useState } from "react";
import getRandom from "./helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  //creando un estado: inicialmente null
  const [locationInfo, setLocationInfo] = useState(null)
  
  
  useEffect(()=>{
    const randomDimension=getRandom(126)//generacion hasta el 126
    //console.log(randomDimension) probando con console
    axios.get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
    .then(({data})=>setLocationInfo(data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <main>
      {/* hacemos una props para atravez de ello mandar informacion (el valor del estado) */}
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} />  
      {/* locationInfo.residents sacamos los recidentes desde la api 
        locationInfo?.residents cone signo ? significa o tma primero el valor de izquierda y si es tru retorn si null
  locationInfo?.residents ?? []  el || es como un OR si es el "locationInfo?.residents* es folse o no hay nada vota un vacio []*/}
      <ResidentList residents={locationInfo?.residents ?? []} />
    </main>
  );
}

export default App;
