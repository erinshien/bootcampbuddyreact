import {useState} from 'react';
import './Instructions.css'

export default function Instructions() {
  const [ instructionsToggle , setInstructionsToggle ] = useState(false)

  function handleClick() {
    setInstructionsToggle(!instructionsToggle);
  }

  return (
    <div className="instructions">
    <button onClick={handleClick}>Instructions</button>
    { instructionsToggle ? (
      <div className="instructions-text">
        <p>1. Select a buddy from the dropdown menu</p>
        <p>2. Tell them how you're feeling by clicking one of the faces below</p>
      </div>
    ): null }
  </div>
  );
}