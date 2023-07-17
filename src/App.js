import './App.css';
import HeroComponent from './components/HeroComponent';
import NavBar from './components/NavBarComponent'
import SkillsContainer from './containers/SkillsContainer'
import SliderComponent from './components/SliderComponent';
import WebsitesContainer from './containers/WebsitesContainer';
import MockupWebsite from './imagery/mockupWebsite/MOCKUP_GLOBAL.png'


function App() {
  return (
    <div className="App">
  <NavBar/>
 <HeroComponent/>
  <SliderComponent/>
  <img className='main-image'alt='picture of a newsletter, a blog, an instagram post'src={MockupWebsite}/>
  
  <SkillsContainer/>
  <WebsitesContainer/>
 
    </div>
  );
}

export default App;
