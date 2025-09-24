import Avatar from '../img/avata.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

import cv from "../docs/curriculo.pdf"

const SideBar = () => {
  return (
    <aside id="sidebar">
      <div className="avatar-container">
        <img src={Avatar} alt="João Vitor" />
      </div>

      <h2 className="title">Desenvolvedor</h2>

      <SocialNetworks/>
      <InformationContainer/>


      <a href={cv} className="btn" target='_blank'>Download currículo</a>
    </aside>
  )
}

export default SideBar
