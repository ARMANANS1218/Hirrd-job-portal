import Header from '@/components/header'
// import React from 'react'
import { Outlet } from 'react-router-dom'
// import '../App.css'
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className='min-h-screen p-4 container-contain'>
          <Header/>
          <Outlet/>
      </main>
     
     <div className="p-6 text-center bg-gray-600 mt-10">
      Made by Spartan #Arman Ansari
     </div>
    </div>
  )
}

export default AppLayout