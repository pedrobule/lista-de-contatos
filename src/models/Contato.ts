class Contato {
  nome: string
  descricaoNome: string
  telefone: string
  descricaoTelefone: string
  email: string
  descricaoEmail: string
  id: number

  constructor(
    nome: string,
    descricaoNome: string,
    telefone: string,
    descricaoTelefone: string,
    email: string,
    descricaoEmail: string,
    id: number
  ) {
    this.nome = nome
    this.descricaoNome = descricaoNome
    this.telefone = telefone
    this.descricaoTelefone = descricaoTelefone
    this.email = email
    this.descricaoEmail = descricaoEmail
    this.id = id
  }
}

export default Contato
