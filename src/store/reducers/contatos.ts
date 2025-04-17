import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Nome',
      descricaoNome: 'Pedro Cavalcante',
      telefone: 'Telefone',
      descricaoTelefone: '11982401205',
      email: 'Email',
      descricaoEmail: 'pedrowinie@gmail.com'
    },
    {
      id: 2,
      nome: 'Nome',
      descricaoNome: 'Winie Santos',
      telefone: 'Telefone',
      descricaoTelefone: '11981013646',
      email: 'Email',
      descricaoEmail: 'Cutwinie@gmail.com'
    },
    {
      id: 3,
      nome: 'Nome',
      descricaoNome: 'Maria Eduarda',
      telefone: 'Telefone',
      descricaoTelefone: '11982403646',
      email: 'Email',
      descricaoEmail: 'Md@gmail.com'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    excluir: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { excluir, editar } = contatoSlice.actions

export default contatoSlice.reducer
