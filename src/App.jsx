import React, { useState}from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn'; 
import Footer from './components/Footer/Footer';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import Stirfry from './pages/Stirfry/Stirfry';
import Fry from './pages/Fry/Fry';  
import Bake from './pages/Bake/Bake'; 
import Soup from './pages/Soup/Soup';  
import Grill from './pages/Grill/Grill';  
import Other from './pages/Other/Other';  
import Basilchicken from './pages/Basilchicken/Basilchicken';
import Padpakbung from './pages/Padpakbung/Padpakbung';
import Padthai from './pages/Padthai/Padthai';
import ChocolateCake from './pages/Chocolatecake/Chocolatecake';
import BakedChicken from './pages/Bakedchicken/Bakedchicken';
import GarlicBread from './pages/Garlicbread/Gaelicbread';    
import Greencurry from './pages/Greencurry/Greencurry';
import TomYum from './pages/Tomyum/Tomyum';
import ChickenSoup from './pages/Chickensoup/Chicksoup';
import GrilledChicken from './pages/Grilledchiken/Grilledchiken';  
import GrilledShrimp from './pages/Grilledshrimp/Grilledshrimp';
import GrilledVegetables from './pages/Grilledvegetables/Grilledvegetables';
import Fishsauceprok from './pages/Fishsaucepork/Fishsauceprok';
import FriedChicken from './pages/Friedchick/Friedchicken'; 
import Tempura from './pages/Tempura/Tempura';
import Kaijiao from './pages/Kaijiao/Kaijiao';
import Khaotom from './pages/Khaotom/Khaotom';
import Mookata from './pages/Mookata/Mookata';
import SignUp from './pages/SignUp/SignUp';
import MyRecipe from './pages/MyRecipe/MyRecipe';
import Profile from './pages/Profile/Profiles';
import RecipePage from './pages/Recipepage/RecipePage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
const App = () => {

  const [user, setUser] = useState(null);
  return (
    <div className='app'>
       <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignIn setUser={setUser}/>} /> 
        <Route path='/addrecipe' element={<AddRecipe />} />
        <Route path='/stirfry' element={<Stirfry />} />
        <Route path='/fry' element={<Fry />} /> 
        <Route path='/bake' element={<Bake />} /> 
        <Route path='/soup' element={<Soup />} /> 
        <Route path='/grill' element={<Grill />} /> 
        <Route path='/other' element={<Other />} /> 
        <Route path='/basilchicken' element={<Basilchicken />} />  
        <Route path='/padpakbung' element={<Padpakbung />} />
        <Route path='/padthai' element={<Padthai />} />
        <Route path='/chocolatecake' element={<ChocolateCake />} />
        <Route path='/bakedchicken' element={<BakedChicken />} />
        <Route path='/garlicbread' element={<GarlicBread />} />
        <Route path='/greencurry' element={<Greencurry />} />  
        <Route path='/tomyum' element={<TomYum />} />   
        <Route path='/chickensoup' element={<ChickenSoup />} />        
        <Route path='/fishsaucepork' element={<Fishsauceprok />} />  
        <Route path='/grilledchicken' element={<GrilledChicken />} /> 
        <Route path='/grilledshrimp' element={<GrilledShrimp />} /> 
        <Route path='/grilledvegetables' element={<GrilledVegetables />} /> 
        <Route path='/friedchicken' element={<FriedChicken />} />
        <Route path='/tempura' element={<Tempura />} /> 
        <Route path='/kaijiao' element={<Kaijiao />} /> 
        <Route path='/khaotom' element={<Khaotom />} /> 
        <Route path='/mookata' element={<Mookata />} /> 
        <Route path='/signUp' element={<SignUp />} /> 
        <Route path='/myrecipe' element={<MyRecipe />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
