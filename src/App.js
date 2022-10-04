import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='blue_strip'><h3>Aumente em até 70% seus agendamentos automáticos</h3></div>
      <Header />
      <Main />
    </div>
    
  );
}

export default App;
