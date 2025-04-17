import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <p>Lista de Contatos</p>
      <ul>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
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
}

export default ListaDeContatos
