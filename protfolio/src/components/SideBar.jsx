import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/3.jpeg'

const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Jesus Vicken" />
      <p className="title">Fullstack Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  )
}

export default SideBar