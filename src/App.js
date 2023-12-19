
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection';
import Whyme from './Components/Whyme/Whyme';
import Footer from './Components/Footer/Footer';
import Whatwedo from './Components/Whatwedo/Whatwedo';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Whyme/>
      /*<Contact/>*/
      <Footer/>
    </div>
  );
}

export default App;
