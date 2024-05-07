import React, { useEffect, useState } from 'react'
import './Movielist.css'
// import { useParams } from 'react-router-dom'
import Cards from '../Cards/Cards';

function Movielist() {
  // const  {type} = useParams()
  // const [movielist,setmovielist]=useState([]);

//   useEffect(() => {
//     getData()
// }, [])

// useEffect(() => {
//     getData()
// }, [type])

// const getData = () => {
//     fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
//     .then(res => res.json())
//     .then(data => setmovielist(data.results))
// }

const [data,setdata]= useState([])

useEffect(()=>{
const apicall=async ()=>{
    const res= await fetch("http://localhost:8002/api/movies/getmovies");
  //  console.log(res);
    const jso=await res.json();
  //  console.log(jso)
    setdata(jso)
}
apicall();


},[])
// console.log(data)

const [inp,setinp]=useState("")

const inputhandle=(e)=>{
  setinp(e.target.value);
  // console.log(inp);


}


const [btn,setbtn]=useState();

const bt=(e)=>{
  console.log(e.target.value)

  setdata(
    data.filter((i)=>{
      return i.original_title == inp.toLowerCase();
    })
  )
}






  
  return (

    <>

    <div className='search'>
    <input type='text' placeholder='search movies' onChange={inputhandle}></input>
    <button onClick={bt}>
    Click
    </button>

    </div>

    <div className='movie__list'>
    <h2 className='list__title'>{inp}</h2>
    <div className='list__cards'>


        {
            data.map((i,idx)=>(  
                <Cards item={i} idx={idx} />
            ))
        }
    </div>

      
    </div>  
    </>
  )
}

export default Movielist