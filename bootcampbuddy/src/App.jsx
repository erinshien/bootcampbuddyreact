import { useState } from 'react'
import './App.css'

import Header from "./Header/Header.jsx"
import Dropdown from "./Dropdown/Dropdown.jsx"
import BuddyImage from "./BuddyImage/BuddyImage.jsx"
import Message from "./Message/Message.jsx"
import MoodButton from "./MoodButton/MoodButton.jsx"
import Footer from "./Footer/Footer.jsx"

const App = () => {

  const [selectedBuddy, setSelectedBuddy] = useState({
    name: '',
    image: 'selectbuddy.png'
  });

  const handleSelectBuddy = (buddy) => {
    setSelectedBuddy(buddy);
  };

  const [ instructionsToggle , setInstructionsToggle ] = useState(false);

  function handleInstructionsClick() {
    setInstructionsToggle(!instructionsToggle);
  }

  return (
    <>
      <Header />
      <main>
        <section className="top">
          <Dropdown onSelectBuddy={handleSelectBuddy} />
          <button onClick={handleInstructionsClick} className={instructionsToggle ? "instructions-open" : "instructions-closed"}>Instructions</button>
          { instructionsToggle && (
          <div className="instructions-text">
          <p>1. Select a buddy from the dropdown menu above</p>
          <p>2. Tell them how you are feeling by clicking one of the faces below</p>
          </div>
          )}
        </section>
        <BuddyImage selectedBuddy={selectedBuddy} />
        <Message selectedBuddy={selectedBuddy} />
        <section className="mood-buttons">
          <div className="buttons">
            <MoodButton color='#729ea1' image='moodbreakdown.png' />
            <MoodButton color='#b5bd89' image='moodsad.png' />
            <MoodButton color='#fbd87f' image='moodchill.png' />
            <MoodButton color='#ec9192' image='moodhappy.png' />
          </div>
          <div className="mood-button-text">
            <p>I'm having a breakdown!</p>
            <p>I'm not feeling so good...</p>
            <p>I'm feeling pretty chill.</p>
            <p>I'm feeling great!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App;
