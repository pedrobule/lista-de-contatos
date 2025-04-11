import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Titulo>
      Nome:
      <S.Descricao />
    </S.Titulo>
    <S.Titulo>
      Telefone:
      <S.Descricao />
    </S.Titulo>
    <S.Titulo>
      Email:
      <S.Descricao />
    </S.Titulo>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Excluir</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
