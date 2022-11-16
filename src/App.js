import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import GymWorks from './Components/GymWorks/GymWorks';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App bg-cyan-100 ">
        <Header></Header>
        <GymWorks></GymWorks>
        <Footer></Footer>
    </div>
  );
}

export default App;
