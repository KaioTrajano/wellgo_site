import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='blue_strip'><h3>Aumente em até 70% seus agendamentos automáticos</h3></div>
      <Header />
    </div>
    
  );
}

export default App;
