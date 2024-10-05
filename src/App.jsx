import Header from './components/Header' 
import Home from './components/Home'// Adjust the path if necessary
import Project from './components/Project'
import Contact from './components/Contact'
import Service from './components/Service'
import './index.css';
const App = () => {
  return (
    <div className='app'>
     <Header/>
      <Home/>
      <Service />
      <Project/>
      <Contact/> 
    </div>
  )
}

export default App




