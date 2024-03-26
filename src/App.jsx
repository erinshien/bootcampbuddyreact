import { useState } from 'react'
import './App.css'

import Header from "./Header/Header.jsx"
import Dropdown from "./Dropdown/Dropdown.jsx"
import Instructions from "./Instructions/Instructions.jsx"
import BuddyImage from "./BuddyImage/BuddyImage.jsx"
import Message from "./Message/Message.jsx"
import MoodButtons from "./MoodButtons/MoodButtons.jsx"
import Footer from "./Footer/Footer.jsx"

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
      <main>
        <section className="top">
          <Dropdown onSelectBuddy={handleSelectBuddy} />
          <Instructions />
        </section>
        <BuddyImage selectedBuddy={selectedBuddy} />
        <Message selectedBuddy={selectedBuddy} />
        <MoodButtons />
      </main>
      <Footer />
    </>
  )
}

export default App;
