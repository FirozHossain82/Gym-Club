import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import GymWorks from './Components/GymWorks/GymWorks';

function App() {
  return (
    <div className="App bg-cyan-100 ">
        <Header></Header>
        <GymWorks></GymWorks>
    </div>
  );
}

export default App;
