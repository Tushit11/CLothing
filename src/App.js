import './App.css';
import Home from './Pages/Home/Home';
import MainRoutes from './compoents/MainRoutes/MainRoutes';
import Navbar from './compoents/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <MainRoutes />
    </div>
  );
}

export default App;
