import Carousel from "./components/Carousel";
// import slides from "./data/carouselData.json";

import "./App.css";

function App() {
  const slides = [
    {
      src: "https://picsum.photos/seed/img1/600/400",
      alt: "image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "image 2 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "image 2 for carousel",
    },
  ];

  return (
    <div className="App">
      <Carousel data={slides} />
    </div>
  );
}

export default App;
