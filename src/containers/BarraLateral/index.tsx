import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { inserir } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const [nome] = useState('Nome')
  const [descricaoNome, setDescricaoNome] = useState('')
  const [telefone] = useState('Telefone')
  const [descricaoTelefone, setDescricaoTelefone] = useState('')
  const [email] = useState('Email')
  const [descricaoEmail, setDescricaoEmail] = useState('')

  const inserirContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(
      nome,
      descricaoNome,
      telefone,
      descricaoTelefone,
      email,
      descricaoEmail,
      4
    )
    dispatch(inserir(contatoParaAdicionar))
  }
  return (
    <S.Barra>
      <S.Busca>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
      </S.Busca>
      <S.Form onSubmit={inserirContato}>
        <div>
          <S.Campo
            value={descricaoNome}
            onChange={(evento) => setDescricaoNome(evento.target.value)}
            type="text"
            placeholder="Nome"
          />
        </div>
        <div>
          <S.Campo
            value={descricaoTelefone}
            onChange={(evento) => setDescricaoTelefone(evento.target.value)}
            type="tel"
            placeholder="Telefone"
          />
        </div>
        <div>
          <S.Campo
            value={descricaoEmail}
            onChange={(evento) => setDescricaoEmail(evento.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <S.BotaoInserir type="submit">Inserir</S.BotaoInserir>
      </S.Form>
    </S.Barra>
  )
}

export default BarraLateral
