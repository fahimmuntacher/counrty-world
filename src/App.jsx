import { Suspense } from 'react'
import './App.css'
import Countries from './Components/countries/countries'

 const countryPromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json()); 
function App() {
 
 return (
    <>
     <Suspense fallback ={<h1 className='text-2xl font-bold p-5 border-2 bg-red-600 w-[150px] h-[150px] text-center'>Loading....</h1>}>
        <Countries countryPromise = {countryPromise}></Countries>
     </Suspense>
      
    </>
  )
}

export default App
