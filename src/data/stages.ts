import type { Stage } from './tipos'

export const stages: Stage[] = [
  {
    id: 1,
    nome: 'Stage 1',
    descricao: 'Remap',
    desempenho: {
      carroId: 'golf-gti',
      potencia: 265,
      torque: 420,
      tempoZeroACem: 6.4,
      custo: 2000,
      larguraBarraPotencia: 65,
      larguraBarraTorque: 70,
    },
  },
  {
    id: 2,
    nome: 'Stage 2',
    descricao: 'Intermediário',
  },
  {
    id: 3,
    nome: 'Stage 3',
    descricao: 'Avançado',
  },
]
