1. Copy across HTML/CSS from original project and convert to React components

- Create new folder
- Create JSX and CSS files
- Copy across HTML into JSX
- Fix any issues (wrap in parent tag or fragment, close all self-closing tags, camelCase properties e.g. swap class for className)
- Import React and CSS into JSX
- Copy across CSS
- Add component to App.jsx

- Header ✅
- Dropdown menu ✅
- Instructions ✅
- Images ✅
- Messages
- Mood button ✅

- Copy across general styling (font, colours, background image)

2. Write logic/state

- Instructions

  - Instructions title should be a button
  - Color on hover
  - When clicked, the instructions appear and instructions title changes to hover color
  - When clicked again, the instructions close and title returns to original color

- Dropdown Menu

  - Should have "selected buddy" state
  - When a buddy is selected, the image changes to the corresponding buddy image
  - The message element appears e.g. "${selectedBuddy} says: Hello!"

- Mood Buttons
  - Before a button has been clicked, the message element shows the buddy's greeting
  - Each mood button generates a randomly selected message from the corresponsing mood-related phrases of the selected buddy

2. Design mobile site first

- Figure out arrangement of components
- Make instructions a toggle button so instructions appear and disappear

3. Make site responsive for desktop
