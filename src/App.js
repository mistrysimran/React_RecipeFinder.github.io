import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/common/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './Components/RecipeDetails';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />  
        <Route path='/recipes/:recipeId' element={<RecipeDetails />} />     
      </Routes>

    </BrowserRouter>
  );
}

export default App;
