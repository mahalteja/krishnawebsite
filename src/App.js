
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection';
import Whyme from './Components/Whyme/Whyme';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Whyme/>
      <Footer/>
    </div>
  );
}

export default App;
