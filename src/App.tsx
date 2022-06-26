import React,{ useEffect }  from "react";
import "./scss/app.scss";
import { Header } from "./components/Header";
import { MenuHead } from "./components/MenuHead";
import { Middle } from "./components/Middle";
import { Footer } from "./components/Footer";
import { useDispatch } from 'react-redux'
import type { AppDispatch } from './store'
import { getRecipes } from './features/recipeSlice'

function App() { 
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getRecipes("burger"));
  }, []);
  return (
    <div className="App"> 
      <Header />
      <MenuHead />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
