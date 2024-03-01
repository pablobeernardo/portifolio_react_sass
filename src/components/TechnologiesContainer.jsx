import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, skill:"Desenvolvimento de páginas web modernas e acessíveis utilizando HTML5. Proficiente na criação de estruturas semânticas e na implementação de elementos audiovisuais de forma otimizada" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, skill:"Estilização avançada e responsiva através do CSS3. Experiência na criação de layouts atraentes, adaptáveis a diferentes dispositivos, com foco na usabilidade e na experiência do usuário." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, skill:"Programação dinâmica e interativa com JavaScript. Desenvolvimento de funcionalidades front-end e integração de scripts para aprimorar a experiência do usuário, garantindo alto desempenho e compatibilidade." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, skill:"Ampla experiência em desenvolvimento server-side utilizando Node.js. Criação de aplicativos escaláveis e eficientes, com ênfase na construção de APIs robustas e na manipulação de eventos assíncronos." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, skill:"Gerenciamento eficaz de bancos de dados MySQL. Desenvolvimento de consultas complexas, otimização de desempenho e garantia da integridade dos dados para sistemas seguros e eficientes." },
  { id: "react", name: "React", icon: <DiReact />, skill:"Construção de interfaces reativas e componentes reutilizáveis com React. Desenvolvimento de aplicações web modernas e eficientes, utilizando a abordagem declarativa para garantir uma experiência de usuário fluida." },
]

const TechnologiesContainer = () => {
  return (
    <section className='tecnologies-container'>
      <h2>Tecnologias</h2>
      <div className='tecnologies-grid' >
        {technologies.map((tech) => (
          <div className='tecnology-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>{tech.skill}</p>
            </div>

          </div>
        ))}


      </div>
    </section>
  )
}

export default TechnologiesContainer