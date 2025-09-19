import { AiFillPhone,AiOutlineMail, AiFillEnvironment } from "react-icons/ai"



import "../styles/components/informationcontainer.sass"



const InformationContainer = () => {
  return (
    <section id="information">

        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>Telefone:</h3>
                <p>(99)998647-1036</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>Email:</h3>
                <p>jv.dev2074@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="Localizacao"/>
            <div>
                <h3>Localizaçao:</h3>
                <p>Codo-MA</p>
            </div>
        </div>

    </section>
  )
}

export default InformationContainer