import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    nome: 'Nome',
    descricaoNome: 'Pedro Cavalcante',
    telefone: 'Telefone',
    descricaoTelefone: 11982401205,
    email: 'Email',
    descricaoEmail: 'pedrowinie@gmail.com'
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>Lista de Contatos</p>
    <ul>
      {contatos.map((t) => (
        <li key={t.nome}>
          <Contato
            nome={t.nome}
            descricaoNome={t.descricaoNome}
            telefone={t.telefone}
            descricaoTelefone={t.descricaoTelefone}
            email={t.email}
            descricaoEmail={t.descricaoEmail}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
