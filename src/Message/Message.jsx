import 'react'
import PropTypes from 'prop-types';
import './Message.css'

const buddies = [
  {
    name: "erin",
    greeting: "Hiya friend! How are you feeling today?",
    messages: [
      [
        "That's understandable, this is tough! But you are tougher. I'm proud of you!",
        "You're not alone. Let's take some deep breaths and have a moment of calm together.",
        "It's going to be okay, I promise. Let's focus on one small part of the problem at a time. You've got this!"
      ],
      [
        "Maybe it's time for a little dopamine boost! Do you have a tasty treat you could munch on, or a favourite funny video to watch?",
        "Let's put some music on, step away from the screen for a minute, and just wiggle!",
        "It's important to rest and recover, maybe try getting away from your computer for a few minutes and look out the window, or reach out to someone you care about. ❤️"
      ],
      [
        "Niiiice I love this for you! Let's keep these vibes going!",
        "That's awesome, remember this feeling the next time you're having a panic - It's all chill babyyy! 😎",
        "Sweet, you've got this! I believe in you!"
      ],
      [
        "Woohoo!!! You're doing amazing!",
        "I'm in awe of your awesomeness!",
        "That's brilliant! I see you and I'm proud of you!"
      ]
    ]
  },
  {
    name: "holly",
    greeting: "Hello! How are you feeling right now?",
    messages: [
      [
        "Try to take the night off tonight, sometimes the best thing that you can do for yourself is relax. You'll thank yourself in the morning!",
        "I hear you! Remember that you've overcome challenges before, focus on your strengths. You'll get through this too.",
        "Take things one step, one thought, at a time. Maybe have a ten minute screen break? You've got this."
      ],
      [
        "Even the smallest spark can light a fire! Don't underestimate the power of doing something you enjoy, even if it feels small.",
        "You know your favourite thing? Can you have ten minutes to go and do that? It might be the boost you need!",
        "Remember that you can do anything that you put your mind to, it just might take some time. That's okay!"
      ],
      [
        "Keep up the good work, you're doing brilliantly, you got this!",
        "Nice! Vibes are immaculate. Care to share what's contributing to the chillness today?",
        "Awesome! Sounds like you're in a good space and I'm here for it!"
      ],
      [
        "Sounds like you're on top of the world, I love it!",
        "Amazing! I'm glad to hear that things are going great for you!",
        "I'm happy to hear you're feeling great! Care to share some of your good fortune?"
      ]
    ]
  },
  {
    name: "rachel",
    greeting: "Hello lovely human! How are you feeilng today?",
    messages: [
      [
        "I can relate - I've had three of those this week! Just remember that you're far more capable than you realise.",
        "That's okay. Close your eyes, put your feet on the floor, and take a few deep breaths. You've got this.",
        "Can you take a break? What's something nice you can do to be kind to yourself for the next ten minutes."
      ],
      [
        "Let's get away from the screen. Move your body if you can and definitely, definitely shake your bum!",
        "How about making yourself a hot drink. Whilst the kettle boils, say these words out loud (or in your head, if that feels better): It's okay to be sad, but my hair looks really, really great.",
        "I've got you, my friend. Stop everything you're doing and watch <a href='https://www.youtube.com/watch?v=ZXjjw26Lp9w&ab_channel=WorldTopTen'>this video</a> right now!"
      ],
      [
        "Oh my god, please tell me how you've achieved this! I want to know your chill secrets.",
        "Nice one! Keep on keeping on.",
        "Cool! Maybe check in with your other bootcampers to see if anyone needs some help?"
      ],
      [
        "YEEEEAAAAHHHHH!!!! 😁🙌🥳🎉",
        "This makes my heart explode! Let's keep riding this high!",
        "High-five for being 100% awesome!"
      ]
    ]
  },
  {
    name: "stacie",
    greeting: "Hello sunshine! How are you feeling?",
    messages: [
      [
        "Look down, are you still intact? Then you're going to be okay.",
        "Think about the last time you felt like this. Did it last forever? No, and this won't either!",
        "Take a deep breath, close your laptop, and go and do anything else! Come back in 15 minutes and if you don't feel better, set the house on fire :)"
      ],
      [
        "Awhh bless you, you must feel like you have the world on your shoulders right now! But that's okay, the only important thing is you right now so go and do something you enjoy or have a treat :D",
        "If there's anything in this world that's guaranteed, it's that this feeling won't last forever. YOU GOT THIS!!!",
        "Time for a nap, me thinks! Rest you eyes and your body, you are in no rush right now - all that matters is you peace <3"
      ],
      [
        "SO glad to see you progress, I'm super proud. How about you check up on a loved one whilst you're riding the coaster of life?",
        "How much can you achieve when you're chilled out and feeling peaceful? Now remember this, you don't need to work harder on the code, you need to work harder on looking after YOU!",
        "I'm so proud of you sweetie pie!"
      ],
      [
        "YASSSSSSSSS QUEEN/KING/QUING, so proud of you, feels like yesterday you were taking your first steps :D",
        "YAY! Time to do the happy dance :D, do do, dah do do doooo",
        "Remember this time when you feel overwhelmed :) nothing is permanent and that's what makes life a wonderful roller coaster"
      ]
    ]
  }
]

const Message = ({ selectedBuddy }) => {

  const selectedBuddyName = selectedBuddy.name


  const selectedBuddyMessages = buddies.find((buddy) => buddy.name === selectedBuddyName.toLowerCase());

  if (!selectedBuddyName) {
    return null;
  } else {
    return <p id="buddy-message">{selectedBuddyMessages.greeting}</p>;
  }
}

Message.propTypes = {
  selectedBuddy: PropTypes.object.isRequired,
};

export default Message;