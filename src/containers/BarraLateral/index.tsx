import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
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
      <S.Aside>
        <div>
          <S.Campo type="text" placeholder="Nome" />
        </div>
        <div>
          <S.Campo type="tel" placeholder="Telefone" />
        </div>
        <div>
          <S.Campo type="email" placeholder="Email" />
        </div>
        <S.BotaoInserir type="submit">Inserir</S.BotaoInserir>
      </S.Aside>
    </S.Barra>
  )
}

export default BarraLateral
