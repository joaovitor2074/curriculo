import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiReact, DiMysql, DiWordpress } from "react-icons/di"

import "../styles/components/tecnologiacontainer.sass"

const tecnologia = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "CSS", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.Js", icon: <DiNodejsSmall /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "mysql", name: "MYSQL", icon: <DiMysql /> },
    { id: "wordpress", name: "WordPress", icon: <DiWordpress /> }
]

const TecnologiasContainer = () => {
    return (
        <section className="Tecnologias">
            <h2>Tecnologias:</h2>
            <div className="tecnologias-grid">
                {tecnologia.map((tec) => (
                    <div className="tecnologia-card" id={tec.id} key={tec.id}>
                        {tec.icon}
                        <div className="tecnologia-info">
                            <h3>{tec.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad laudantium libero quae aliquid rerum alias minima et. Magni possimus, quisquam pariatur nam sed laboriosam et sit atque dolor voluptas!</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecnologiasContainer