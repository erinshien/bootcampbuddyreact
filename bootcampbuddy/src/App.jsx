// import { useState } from 'react'
import './App.css'

import Header from "./Header/Header.jsx"
import Dropdown from "./Dropdown/Dropdown.jsx"
import Instructions from "./Instructions/Instructions.jsx"
import BuddyImage from "./BuddyImage/BuddyImage.jsx"
import Message from "./Message/Message.jsx"

export default function App() {

  return (
    <>
      <Header />
      <Dropdown />
      <Instructions />
      <BuddyImage imageSource={'selectbuddy.png'} />
      <Message selectedMessage="Hello!" />
    </>
  )
}
