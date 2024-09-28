import { ImageGrid } from "./image-gallery/ImageGrid";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "./todo/TodoPage";
import Home from "./Home";
import WeatherPage from "./weather-app/WeatherPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/imagegrid" element={<ImageGrid />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/weatherapp" element={<WeatherPage />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
