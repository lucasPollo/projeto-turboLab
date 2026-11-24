import type { Carro, Marca } from '../../../data/tipos'
import type { CarroDto } from '../dtos/carro'

function transformarNumero(numero: number | string): number {
  return typeof numero === 'number' ? numero : Number(numero)
}

function transformarMarca(marca: string): Marca {
  if (marca === 'Volkswagen' || marca === 'BMW' || marca === 'Audi') {
    return marca
  }

  throw new Error(`Marca desconhecida: ${marca}.`)
}

export function transformarCarros(carrosDto: CarroDto[]): Carro[] {
  return carrosDto.map((carroDto) => ({
    id: carroDto.id,
    nome: carroDto.nome,
    marca: transformarMarca(carroDto.marca),
    imagem: carroDto.imagem,
    motor: carroDto.motor,
    potencia: transformarNumero(carroDto.potencia_original),
    torque: transformarNumero(carroDto.torque_original),
    desempenhoPorStage: {
      1: {
        potencia: transformarNumero(carroDto.stage_1_potencia),
        torque: transformarNumero(carroDto.stage_1_torque),
        aceleracao0a100: transformarNumero(carroDto.stage_1_aceleracao_0_a_100),
        custoEstimado: transformarNumero(carroDto.stage_1_custo_estimado),
      },
      2: {
        potencia: transformarNumero(carroDto.stage_2_potencia),
        torque: transformarNumero(carroDto.stage_2_torque),
        aceleracao0a100: transformarNumero(carroDto.stage_2_aceleracao_0_a_100),
        custoEstimado: transformarNumero(carroDto.stage_2_custo_estimado),
      },
      3: {
        potencia: transformarNumero(carroDto.stage_3_potencia),
        torque: transformarNumero(carroDto.stage_3_torque),
        aceleracao0a100: transformarNumero(carroDto.stage_3_aceleracao_0_a_100),
        custoEstimado: transformarNumero(carroDto.stage_3_custo_estimado),
      },
    },
  }))
}
