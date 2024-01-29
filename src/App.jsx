import Header from './components/Header' 
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import './index.css';
const App = () => {
  return (
    <div className='app'>
     <Header/>
      <Home/>
      <Project/>
      <Contact/> 
    </div>
  )
}

export default App




