import Avatar from '../img/foto_perfil.jpg';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt='Pablo Bernardo'/>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar