import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound';
import Pokemon from './featurs/Pokomon';
import Home from './featurs/Pokomon/page/Home';


const App = () => {
  return (
    <div className="App">
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/pokemons/*" element={<Pokemon/>} ></Route>
                <Route path="*" element={<NotFound/>} />
            </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
