import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KeyContainer from './layouts/KeyContainer';
import Footer from './layouts/Footer';
import { KeyProvider } from './context/KeyContext';


function App() {
  return (
    <div className="App">
      <h1>Teclado ruso</h1>
      <p className="SubLine"></p>
      <KeyProvider>
      <KeyContainer/>
      <Footer/>
      </KeyProvider>
    </div>
  );
}

export default App;
