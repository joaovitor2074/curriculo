

import AboutContainer from './AboutContainer'
import ProjetosContainer from './ProjetosContainer'
import TecnologiasContainer from './tecnologiasContainer'


import '../styles/components/mainContent.sass'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TecnologiasContainer/>
      <ProjetosContainer/>
    </main>
  )
}

export default MainContent