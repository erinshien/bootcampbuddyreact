import { useState } from 'react'
import './App.css'

import Header from "./Header/Header.jsx"
import Dropdown from "./Dropdown/Dropdown.jsx"
import Instructions from "./Instructions/Instructions.jsx"
import BuddyImage from "./BuddyImage/BuddyImage.jsx"
import Message from "./Message/Message.jsx"

const App = () => {
  const [selectedBuddy, setSelectedBuddy] = useState({
    name: '',
    image: 'selectbuddy.png'
  });

  const handleSelectBuddy = (buddy) => {
    setSelectedBuddy(buddy);
  };

  return (
    <>
      <Header />
      <Dropdown onSelectBuddy={handleSelectBuddy} />
      <Instructions />
      <BuddyImage selectedBuddy={selectedBuddy} />
      <Message selectedMessage="Hello!" />
    </>
  )
}

export default App;

// export default function App() {

//   return (
//     <>
//       <Header />
//       <Dropdown />
//       <Instructions />
//       <BuddyImage imageSource={'selectbuddy.png'} />
//       <Message selectedMessage="Hello!" />
//     </>
//   )
// }
