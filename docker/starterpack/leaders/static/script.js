// Strings data (not in file beacause I'm lazy)
const raw =
{
  "loreText": [
    "Hello there, it's so very nice to meet you!",
    "Welcome to the world of containers! If you have managed to get here, this means that you completed all the required steps.",
    "My name is Rowan. However, everyone calls me the Docker Professor.",
    "Right now, you are on localhost on port 8080. This URL is often used for local testing.",
    "But you knew that already, didn't you?",
    "Anyway, this world is widely inhabited by creatures known as containers.",
    "At this point, you should know exactly what a container is.",
    "Containers can be used for all sorts of things, from storing data to running programs.",
    "And right now, you are running a NodeJS program inside a container. Pretty cool, right?",
    "But enough talking. You need a password, right?",
    "Well, hold your horses. The password is...",
    "bGVqbjg3WTY3QmhqYjY3M0Y4NjdranloP0pIWS3DqDU0",
    "But wait! This is a Base 64 encrypted password. You have to decode it!",
    "Well, that's all for me. I am just going to vanish. If you wish, you can keep on listening to the music.",
    "Until then, have a nice day!"
  ],
}
const jsonText = JSON.parse(JSON.stringify(raw));

// Clicker count and tab with values to test from backend
let c = 0;

const startup = () => {
  // Remove Press start text and show all elements
  document.body.removeChild(document.getElementById("anywhere"));
  document.getElementById("docker").style.display = "block";
  document.getElementById("textbox").style.display = "block";
  document.getElementById("arrow").style.display = "block";

  // Launch music
  document.getElementById("ost").play();

  // Show first text
  showText(jsonText.loreText[c], 0);
}

const buttonClick = () => {
  c++;
  document.getElementById("selsound").play();
  document.getElementById("text").innerHTML = "";
  waitabit();
  advance();
}

// MAIN ATTRACTION HERE
const advance = () => {
  // Vars for characters
  const rowan = document.getElementById("rowan");
  const lucas = document.getElementById("lucas");
  const dawn = document.getElementById("dawn");
  const docker = document.getElementById("docker");

  switch (c) {
    case 1:
      showText(jsonText.loreText[c], 0);
      break;
    case 2:
      docker.style.display = "none";
      rowan.style.display = "block";
      showText(jsonText.loreText[c], 0);
      break;
    case 3:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 4:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 5:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 6:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 7:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 8:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 9:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 10:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 11:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 12:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 13:
      // waitabit();
      showText(jsonText.loreText[c], 0);
      break;
    case 14:
      // waitabit();
      rowan.style.display = "none";
      showText(jsonText.loreText[c], 0);
      break;
    case 999:
      stopGame();
      break;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////////////////

// Function to show text like in Pokémon
const showText = (message, index) => {
  // Disable the click box while message is rolling
  if (index == message.length) {
    document.getElementById("clickbox").disabled = false;
  } else {
    document.getElementById("clickbox").disabled = true;
  }
  if (index < message.length) {
    document.querySelector("#text").textContent += message[index++];
    setTimeout(function () {
      showText(message, index);
    }, 0); // DEBUG = SET TIMEOUT TO 0
  }
};

const waitabit = () => {
  setTimeout(function () {
  }, 2500);
}