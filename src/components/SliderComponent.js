import { techData } from '../data/techData';
import { Image } from 'react-bootstrap';

function SliderComponent() {

  return (
    <ul className='slider-list p-3 mt-5' >
  {techData.map((datum) => (
          <li className='tech-image' key={datum.skill} ><Image  fluid src={datum.image} alt={datum.tech} title={datum.tech}/></li>
      ))}
 
    </ul>

  );
}

export default SliderComponent;