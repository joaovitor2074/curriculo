import Avatar from '../img/avatar.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const SideBar = () => {
  return (
    <aside id="sidebar">
      <div className="avatar-container">
        <img src={Avatar} alt="João Vitor" />
      </div>

      <h2 className="title">Desenvolvedor</h2>

      <SocialNetworks/>
      <InformationContainer/>


      <a href="#" className="btn">Download currículo</a>
    </aside>
  )
}

export default SideBar
