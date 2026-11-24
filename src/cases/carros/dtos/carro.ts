type NumeroDto = number | string

export type CarroDto = {
  id: string
  nome: string
  marca: string
  imagem: string
  motor: string
  potencia_original: NumeroDto
  torque_original: NumeroDto
  stage_1_potencia: NumeroDto
  stage_1_torque: NumeroDto
  stage_1_aceleracao_0_a_100: NumeroDto
  stage_1_custo_estimado: NumeroDto
  stage_2_potencia: NumeroDto
  stage_2_torque: NumeroDto
  stage_2_aceleracao_0_a_100: NumeroDto
  stage_2_custo_estimado: NumeroDto
  stage_3_potencia: NumeroDto
  stage_3_torque: NumeroDto
  stage_3_aceleracao_0_a_100: NumeroDto
  stage_3_custo_estimado: NumeroDto
}

const camposDeTexto: (keyof CarroDto)[] = [
  'id',
  'nome',
  'marca',
  'imagem',
  'motor',
]

const camposNumericos: (keyof CarroDto)[] = [
  'potencia_original',
  'torque_original',
  'stage_1_potencia',
  'stage_1_torque',
  'stage_1_aceleracao_0_a_100',
  'stage_1_custo_estimado',
  'stage_2_potencia',
  'stage_2_torque',
  'stage_2_aceleracao_0_a_100',
  'stage_2_custo_estimado',
  'stage_3_potencia',
  'stage_3_torque',
  'stage_3_aceleracao_0_a_100',
  'stage_3_custo_estimado',
]

export function validarCarroDto(valor: unknown): valor is CarroDto {
  if (typeof valor !== 'object' || valor === null || Array.isArray(valor)) {
    return false
  }

  const campos = valor as Record<string, unknown>
  const textosValidos = camposDeTexto.every((campo) => (
    typeof campos[campo] === 'string' && campos[campo].trim().length > 0
  ))
  const numerosValidos = camposNumericos.every((campo) => {
    const numero = campos[campo]

    if (typeof numero === 'number') {
      return Number.isFinite(numero)
    }

    return typeof numero === 'string'
      && numero.trim().length > 0
      && Number.isFinite(Number(numero))
  })

  return textosValidos && numerosValidos
}
