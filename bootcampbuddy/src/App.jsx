import { useState } from 'react'
import './App.css'

import Header from "./Header/Header.jsx"
import Dropdown from "./Dropdown/Dropdown.jsx"
import Instructions from "./Instructions/Instructions.jsx"
import BuddyImage from "./BuddyImage/BuddyImage.jsx"
import Message from "./Message/Message.jsx"
import MoodButton from "./MoodButton/MoodButton.jsx"
import Footer from "./Footer/Footer.jsx"

const App = () => {
  const [selectedBuddy, setSelectedBuddy] = useState({
    name: '',
    image: 'selectbuddy.png',
    message: 'Hello!'
  });

  const handleSelectBuddy = (buddy) => {
    setSelectedBuddy(buddy);
  };

  return (
    <body>
      <Header />
      <main>
        <section className="top">
          <Dropdown onSelectBuddy={handleSelectBuddy} />
          <Instructions />
        </section>
        <BuddyImage selectedBuddy={selectedBuddy} />
        <Message selectedBuddy={selectedBuddy} />
        <section className="buttons">
          <MoodButton color='#729ea1' image='moodbreakdown.png' text="I'm having a breakdown!" />
          <MoodButton color='#b5bd89' image='moodsad.png' text="I'm not feeling so good..." />
          <MoodButton color='#fbd87f' image='moodchill.png' text="I'm feeling pretty chill right now." />
          <MoodButton color='#ec9192' image='moodhappy.png' text="I'm feeling great, thanks for asking!" />
        </section>
      </main>
      <Footer />
    </body>
  )
}

export default App;
