import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiReact, DiMysql, DiWordpress } from "react-icons/di"
import "../styles/components/tecnologiacontainer.sass"

const tecnologia = [
  { 
    id: "html", 
    name: "HTML5", 
    icon: <DiHtml5 />, 
    desc: "A base de toda página web! Estruturo layouts de forma semântica e organizada." 
  },
  { 
    id: "css", 
    name: "CSS3", 
    icon: <DiCss3 />, 
    desc: "Estilização responsiva, animações e designs modernos para uma boa experiência do usuário." 
  },
  { 
    id: "js", 
    name: "JavaScript", 
    icon: <DiJsBadge />, 
    desc: "Deixo os sites interativos e dinâmicos, aplicando lógica com ES6+." 
  },
  { 
    id: "node", 
    name: "Node.js", 
    icon: <DiNodejsSmall />, 
    desc: "Criação de backends e APIs que conectam tudo de forma rápida e escalável." 
  },
  { 
    id: "react", 
    name: "React", 
    icon: <DiReact />, 
    desc: "Framework favorito para criar interfaces modernas, rápidas e componentizadas." 
  },
  { 
    id: "mysql", 
    name: "MySQL", 
    icon: <DiMysql />, 
    desc: "Banco de dados relacional para organizar e gerenciar informações de forma eficiente." 
  },
  { 
    id: "wordpress", 
    name: "WordPress", 
    icon: <DiWordpress />, 
    desc: "Criação de sites personalizados para profissionais e empresas de forma prática." 
  }
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
              <p>{tec.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologiasContainer
