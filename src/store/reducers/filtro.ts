import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Filtrostate = {
  termo: string
  criterio: 'descricaoNome' | 'descricaoTelefone' | 'descricaoEmail' | 'todos'
}

const initialState: Filtrostate = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions

export default filtroSlice.reducer
