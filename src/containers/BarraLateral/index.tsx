import * as S from './styles'

const BarraLateral = () => (
  <S.Barra>
    <S.Busca>
      <S.Campo type="text" placeholder="Buscar" />
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

export default BarraLateral
