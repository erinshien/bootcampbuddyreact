import 'react'
import PropTypes from 'prop-types';
import './Dropdown.css'

const Dropdown = ({ onSelectBuddy }) => {
  const buddies = [
    { name: 'Erin', image: 'pixelcharactererin.png' },
    { name: 'Holly', image: 'pixelcharacterholly.png' },
    { name: 'Rachel', image: 'pixelcharacterrachel.png' },
    { name: 'Stacie', image: 'pixelcharacterstacie.png' },
  ];

  const handleSelectChange = (e) => {
    const selectedBuddyName = e.target.value;
    if (selectedBuddyName) {
      const selectedBuddy = buddies.find((buddy) => buddy.name === selectedBuddyName);
      onSelectBuddy(selectedBuddy);
    } else {
      onSelectBuddy({
        name: '',
        image: 'selectbuddy.png'
      });
    }
  };

  return (
    <select id="buddyDropdown" onChange={handleSelectChange}>
      <option value="">Select a buddy</option>
      {buddies.map((buddy) => (
        <option key={buddy.name} value={buddy.name}>
          {buddy.name}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  onSelectBuddy: PropTypes.func.isRequired,
};

export default Dropdown

// export default function Dropdown() {
//   return(
//     <select id="buddy-selector">
//       <option value="" selected disabled>Select your buddy</option>
//       <option value="buddy-erin">Erin</option>
//       <option value="buddy-holly">Holly</option>
//       <option value="buddy-rachel">Rachel</option>
//       <option value="buddy-stacie">Stacie</option>
//     </select>
//   )
// }

