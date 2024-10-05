import Header from './components/Header' 
import Home from './components/Home'// Adjust the path if necessary
import Project from './components/Project'
import Contact from './components/Contact'
import Service from './components/Service'
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import './index.css';


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const loadAssets = () => {
      // Simulate loading time (e.g., fetching data, loading images, etc.)
      setTimeout(() => {
        setLoading(false); // Set loading to false when assets are loaded
      }, 3000); // Adjust the time as needed
    };

    loadAssets();
  }, []);

  return (
    <div className='app'>
        {loading ?
      (<Loading /> ) 
      
      :(<>
        <Header/>
        <Home/>
        <Service />
        <Project/>
        <Contact/> 
     </>) 
      
    }
    </div>
  )
}

export default App




