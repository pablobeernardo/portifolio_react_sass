
const ProjectsContainer = () => {
  return (
    <section>
      <h2>Projetos</h2>
        <p>
          TodoList - (Typescript) - Aplicação com autenticação via Gmail, onde usuário lista as suas
          tarefas do dia a dia (adicionar, editar e excluir), marcando em um checkbox as tarefas realizadas,
          organizando sua lista.
        </p>
        <p>
          Result Footbal App - (Typescript) - Aplicação que lista resultados de jogos através do consumo
          de uma API.
        </p>
        <p>
          MapSnap (Mobile – Typescript) - Aplicação que exibe o local do usuário no mapa, e o usuário
          registra com uma foto com título e descrição, e adiciona como marcador no mapa. Possui tambem
          interação de chat entre os usuários.
        </p>
        <p>
          Busca Cep ( PHP ) - Aplicação web utilizando o framework Laravel para realizar integração com
          a API de CEP do Brasil. A aplicação também possui um sistema de autenticação para que os
          usuários possam se cadastrar, fazer login e acessar um painel onde poderão preencher seus dados
          de endereço e adicionar uma foto de perfil.
        </p>
      <a href="#" className="btn">
        Ver projetos
      </a>
    </section>
  )
}

export default ProjectsContainer