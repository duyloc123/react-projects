import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate = useNavigate();

  function handlePrev() {
    navigate("/about");
  }


  return (
    <div>
      Đây là Home
      <button onClick={() => handlePrev()}>About</button>
    </div>
  )
}

export default Home
