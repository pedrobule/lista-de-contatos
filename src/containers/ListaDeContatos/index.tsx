import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const filtroContato = () => {
    return itens.filter(
      (item) =>
        item.descricaoNome.toLowerCase().search(termo.toLocaleLowerCase()) >=
          0 ||
        item.descricaoTelefone
          .toLowerCase()
          .search(termo.toLocaleLowerCase()) >= 0 ||
        item.descricaoEmail.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <p>Você pesquisou: &quot;{termo}&quot;</p>
      <ul>
        {filtroContato().map((t) => (
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
