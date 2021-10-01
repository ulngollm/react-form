import logo from './logo.svg';
import './App.css';
import Modal from './Modal';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Modal id="modal" isOpen={true}></Modal>
        <button onClick={Modal.openModal} data-modal="modal" >Open modal</button>
      </header>
    </div>
  );
}

export default App;
