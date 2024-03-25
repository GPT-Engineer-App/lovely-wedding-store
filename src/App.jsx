import { Routes, Route } from "react-router-dom";
// Assuming that the components are directly under the src directory, not in the components subdirectory.
import WeddingHall from "./WeddingHall";
import WeddingDress from "./WeddingDress";
import PhotoStudio from "./PhotoStudio";
import Makeup from "./Makeup";
import Suit from "./Suit";

function App() {
  return (
    <Routes>
      <Route path="/wedding-hall" element={<WeddingHall />} />
      <Route path="/wedding-dress" element={<WeddingDress />} />
      <Route path="/photo-studio" element={<PhotoStudio />} />
      <Route path="/makeup" element={<Makeup />} />
      <Route path="/suit" element={<Suit />} />
    </Routes>
  );
}

export default App;
