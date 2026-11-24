import type { Carro, Marca } from '../../../data/tipos'
import type { CarroDto } from '../dtos/carro'

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
    potencia: carroDto.potencia_original,
    torque: carroDto.torque_original,
    desempenhoPorStage: {
      1: {
        potencia: carroDto.stage_1_potencia,
        torque: carroDto.stage_1_torque,
        aceleracao0a100: carroDto.stage_1_aceleracao_0_a_100,
        custoEstimado: carroDto.stage_1_custo_estimado,
      },
      2: {
        potencia: carroDto.stage_2_potencia,
        torque: carroDto.stage_2_torque,
        aceleracao0a100: carroDto.stage_2_aceleracao_0_a_100,
        custoEstimado: carroDto.stage_2_custo_estimado,
      },
      3: {
        potencia: carroDto.stage_3_potencia,
        torque: carroDto.stage_3_torque,
        aceleracao0a100: carroDto.stage_3_aceleracao_0_a_100,
        custoEstimado: carroDto.stage_3_custo_estimado,
      },
    },
  }))
}
