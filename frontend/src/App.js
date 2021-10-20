import React from 'react'
import Navbar from './navbar'
import { useState, useEffect } from "react";
import Display from "./display"
import "./app.css"



const App = () => {
  const [groupselect, setgroupselect] = useState("status");
  const [board, setboard] = useState("list");
  return (
    <div id ="root roots">
      <Navbar
      groupselect ={groupselect}
      setgroupselect = {setgroupselect}
      board = {board}
      setboard ={setboard}
      className = "sticky-nav"/>

      <Display
      groupselect ={groupselect}
      setgroupselect = {setgroupselect}
      board = {board}
      setboard = {setboard}
      />
      
    </div>
  )
}

export default App
