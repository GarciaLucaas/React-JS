import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';







 

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer card={"carta hamburguesa"}/>
      
    </div>
  );
}

export default App;
