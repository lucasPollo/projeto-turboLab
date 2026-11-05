export type Marca = 'Volkswagen' | 'BMW' | 'Audi'

export type OpcaoMarca = 'Todos' | Marca

export type StageId = 1 | 2 | 3

export type DesempenhoStage = {
  potencia: number
  torque: number
  aceleracao0a100: number
  custoEstimado: number
}

export type Carro = {
  id: string
  marca: Marca
  nome: string
  motor: string
  potencia: number
  torque: number
  imagem: string
  desempenhoPorStage: Record<StageId, DesempenhoStage>
}

export type Stage = {
  id: StageId
  nome: string
  descricao: string
}
