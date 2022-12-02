import './App.css';
import Header from './components/Header';
import StateComponent from './components/StateComponent';
import EffectComponent from './components/EffectComponent';

function App() {
  return (
    <div className="App col-container">
     <Header />
     <StateComponent />
     <EffectComponent />
    </div>
  );
}

export default App;
