const getRandom=(limit)=>{
    //0-->0.999*126=→0---->125 +1=126 
    return Math.floor(Math.random()*limit)+1
}
export default getRandom