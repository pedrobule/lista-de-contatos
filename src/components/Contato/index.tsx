import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  descricaoNome: string
  telefone: string
  descricaoTelefone: number
  email: string
  descricaoEmail: string
}

const Contato = ({
  nome,
  descricaoNome,
  telefone,
  descricaoTelefone,
  email,
  descricaoEmail
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>
        {nome}
        <S.Descricao value={descricaoNome} />
      </S.Titulo>
      <S.Titulo>
        {telefone}
        <S.Descricao value={descricaoTelefone} />
      </S.Titulo>
      <S.Titulo>
        {email}
        <S.Descricao value={descricaoEmail} />
      </S.Titulo>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarExcluir>Excluir</S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
