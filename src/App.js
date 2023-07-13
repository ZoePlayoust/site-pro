import './App.css';
import HeroComponent from './components/HeroComponent';
import NavBar from './components/NavBarComponent'
import SkillsContainer from './containers/SkillsContainer'
import SliderComponent from './components/SliderComponent';
import WebsitesContainer from './containers/WebsitesContainer';
function App() {
  return (
    <div className="App">
  <NavBar/>
  <HeroComponent/>
  <SliderComponent/>
  <SkillsContainer/>
  {/* <WebsitesContainer/> */}
 
    </div>
  );
}

export default App;
