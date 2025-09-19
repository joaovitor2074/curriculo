import { FaLinkedinIn, FaGithub,FaInstagram } from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>},
    {name: "github", icon: <FaGithub/>},
    {name: "Instagram", icon: <FaInstagram/>}
]

const SocialNetworks = () => {
  return (
    <div className="socials">
        {socialNetworks.map((networks)=>(
            <a href="" className="social-btn" id={networks.name} key={networks.name}>{networks.icon}</a>
        )

        )}
    </div>
  )
}

export default SocialNetworks