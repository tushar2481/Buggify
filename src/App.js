import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js';
import Homes1 from './component/Homes1';
import Homes2 from './component/Homes2';
import Homes3 from './component/Homes3';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Homes1 />
      <Homes2 />
      <Homes3 />
      <Footer />
    </>
  );
}

export default App;
