import 'react'
import './MoodButtons.css'

import MoodButton from '../MoodButton/MoodButton.jsx'
import MoodButtonText from '../MoodButtonText/MoodButtonText'

export default function MoodButtons() {
  return (
    <section className="mood-buttons">
    <div className="buttons">
      <MoodButton color='#729ea1' image='moodbreakdown.png' />
      <MoodButton color='#b5bd89' image='moodsad.png' />
      <MoodButton color='#fbd87f' image='moodchill.png' />
      <MoodButton color='#ec9192' image='moodhappy.png' />
    </div>
    <MoodButtonText />
    </section>
  )
}