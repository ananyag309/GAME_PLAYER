import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import FlipGame from "./Games/FlipCard/FlipCard";
import SnakeGame from "./Games/SnakeGame/SnakeGame";
import GTH from "./Games/GuessTheColor/GTH";
import PongGame from "./Games/PingPongGame/PongGame";
import EmojiIntruderHunt from "./Games/EmojiIntruder/EmojiIntruder";
import RockPaperScissors from "./Games/RockPaper Scissors/Game";
import GameSection from "./Components/GameSection";
import Dashboard from "./Components/Dashboard";
import AddGamePage from "./Components/AddGamePage";
import { useTma } from "./Context/tmaProvider";
import Games from "./Components/Games";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import SimonSays from "./Games/SimonSays/SimonSays";
// Import the Word Guessing Game component
import WordGuessingGame from "./Games/WordGuessingGame/WordGuessingGame"; // Adjust the path as needed
import Game2048 from "./Games/Game2048/Game2048";
const App = () => {
  const { user, isLoading, isError } = useTma();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/games" element={<Games />} />
        <Route path="/flipcard" element={<FlipGame />} />
        <Route path="/snakegame" element={<SnakeGame />} />
        <Route path="/gth" element={<GTH />} />
        <Route path="/emojiintruder" element={<EmojiIntruderHunt />} />
        <Route path="/rckpapsc" element={<RockPaperScissors />} />
        <Route path="/PingPong" element={<PongGame />} />
        <Route path="/simon-says" element={<SimonSays />} />
        <Route path="/word-guessing-game" element={<WordGuessingGame />} /> {/* Add the new route here */}
        <Route path="/Game2048" element={<Game2048 />} /> {/* Make sure this route is present */}
        <Route path="/addgame" element={<AddGamePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
