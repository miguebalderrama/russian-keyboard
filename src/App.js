import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KeyContainer from './layouts/KeyContainer';
import Footer from './layouts/Footer';
import { KeyProvider } from './context/KeyContext';
import ButtonAppBar from './layouts/ButtonAppBar';


function App() {
  return (
    <div className="App">
      <ButtonAppBar/>     
      <KeyProvider>
      <KeyContainer/>
      <Footer/>
      </KeyProvider>
    </div>
  );
}

export default App;
