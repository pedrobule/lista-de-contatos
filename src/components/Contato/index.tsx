import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { excluir, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  descricaoNome: descricaoNomeOriginal,
  telefone,
  descricaoTelefone: descricaoTelefoneOriginal,
  email,
  descricaoEmail: descricaoEmailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoNome, setDescricaoNome] = useState(descricaoNomeOriginal)
  const [descricaoTelefone, setDescricaoTelefone] = useState(
    descricaoTelefoneOriginal
  )
  const [descricaoEmail, setDescricaoEmail] = useState(descricaoEmailOriginal)

  useEffect(() => {
    if (descricaoNomeOriginal.length > 0) {
      setDescricaoNome(descricaoNomeOriginal)
    }
  }, [descricaoNomeOriginal])

  useEffect(() => {
    if (descricaoTelefoneOriginal.length > 0) {
      setDescricaoTelefone(descricaoTelefoneOriginal)
    }
  }, [descricaoTelefoneOriginal])

  useEffect(() => {
    if (descricaoEmailOriginal.length > 0) {
      setDescricaoEmail(descricaoEmailOriginal)
    }
  }, [descricaoEmailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricaoNome(descricaoNomeOriginal)
    setDescricaoTelefone(descricaoTelefoneOriginal)
    setDescricaoEmail(descricaoEmailOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>
        {nome}
        <S.Descricao
          disabled={!estaEditando}
          value={descricaoNome}
          onChange={(e) => setDescricaoNome(e.target.value)}
        />
      </S.Titulo>
      <S.Titulo>
        {telefone}
        <S.Descricao
          disabled={!estaEditando}
          value={descricaoTelefone}
          onChange={(e) => setDescricaoTelefone(e.target.value)}
        />
      </S.Titulo>
      <S.Titulo>
        {email}
        <S.Descricao
          disabled={!estaEditando}
          value={descricaoEmail}
          onChange={(e) => setDescricaoEmail(e.target.value)}
        />
      </S.Titulo>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricaoNome,
                    descricaoTelefone,
                    descricaoEmail,
                    id,
                    nome,
                    telefone,
                    email
                  })
                )
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarExcluir onClick={() => dispatch(excluir(id))}>
              Excluir
            </S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Contato
