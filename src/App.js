import './App.css';
import Homepage from './pages/Home';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Scroll from "./Components/Scroll";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Bash from './Components/Bash';
function App() {
  return (
    <div className="App">
      {/* <Bash/> */}
      <div className='sticky top-0 z-50'>
      <Navbar />
      </div>
      <Routes>
        <Route element={<Homepage/>} path="/" />
       {/* <Bash /> */}
       <Route element={<Bash />} path="/bash" />
      {/* <Homepage /> */}
      </Routes>
      {/* <Scroll /> */}
      {/* <EventRight name={"Event Name"} image={Madhavendra} content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} />
      <EventLeft name={"Event Name"} image={Madhavendra} content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} />
      <EventRight name={"Event Name"} image={Madhavendra} content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} />
      <EventLeft name={"Event Name"} image={Madhavendra} content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} />
      <Gallery />
      <GalleryImages img1={party} img2={Madhavendra} img3={Madhavendra}/>
      <GalleryImages img1={party} img2={Madhavendra} img3={Madhavendra}/>
      <ParticleBackground /> */} 
      <Footer />
    </div>
  );
}

export default App;
