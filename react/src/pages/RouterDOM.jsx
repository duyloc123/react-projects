import React from 'react'

import { Link, Outlet } from "react-router-dom"

function RouterDOM() {
  return (
    <div className='container mx-auto mt-5'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl text-violet-500'>Router</h1>
            <ul className='w-1/3 flex justify-evenly mt-3 bg-yellow-200'>
                <li>
                <Link to = "home">Home</Link>
                </li>
                <li>
                <Link to = "about">About</Link>
                </li>
                <li>
                <Link to = "contact">Contact</Link>
                </li>
            </ul>
        </div>
        <Outlet />
    </div>
  )
}

export default RouterDOM
