import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
