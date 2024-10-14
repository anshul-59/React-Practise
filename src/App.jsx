import "./App.css";
import ImageSlider from "./components/imageS-slider";
import LoadMoreButton from "./components/load-more-button";
import ScrollIndicator from "./components/scroll-indicator";
import WeatherCard from "./components/weather-app";

function App() {
  const PRODUCTS_URL = "https://dummyjson.com/products?limit=100";
  return (
    <>
      <h1>My components Practise</h1>
      {/* <LoadMoreButton /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limiit={"10"}
      /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={PRODUCTS_URL} /> */}

      {/* Weather Card */}
      {/* <WeatherCard /> */}
    </>
  );
}

export default App;
