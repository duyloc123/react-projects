import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<App />}>
            <Route path = "home" element = {<Home />} />
            <Route path = "about" element = {<About />} />
            <Route path = "contact" element = {<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </>,
)
