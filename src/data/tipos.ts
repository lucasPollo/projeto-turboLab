export type Marca = 'Volkswagen' | 'BMW' | 'Audi'

export type OpcaoMarca = 'Todos' | Marca

export type Carro = {
  id: string
  marca: Marca
  nome: string
  motor: string
  potencia: number
  torque: number
  imagem: string
}

export type DesempenhoStage = {
  carroId: Carro['id']
  potencia: number
  torque: number
  tempoZeroACem: number
  custo: number
  larguraBarraPotencia: number
  larguraBarraTorque: number
}

export type Stage = {
  id: number
  nome: string
  descricao: string
  desempenho?: DesempenhoStage
}
