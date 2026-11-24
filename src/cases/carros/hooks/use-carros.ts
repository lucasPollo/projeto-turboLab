import { useEffect, useState } from 'react'
import { API_URL } from '../../../lib/api'
import type { Carro } from '../../../data/tipos'
import { validarCarroDto } from '../dtos/carro'
import { transformarCarros } from '../services/carros-service'

export function useCarros() {
  const [carros, setCarros] = useState<Carro[]>([])
  const [carregando, setCarregando] = useState<boolean>(true)
  const [erro, setErro] = useState<boolean>(false)
  const [tentativa, setTentativa] = useState<number>(0)

  useEffect(() => {
    const controlador = new AbortController()

    async function carregarCarros() {
      try {
        setCarregando(true)
        setErro(false)

        const resposta = await fetch(API_URL, { signal: controlador.signal })
        if (!resposta.ok) {
          throw new Error(`Erro HTTP ${resposta.status}.`)
        }

        const carrosDto: unknown = await resposta.json()
        if (!Array.isArray(carrosDto) || !carrosDto.every(validarCarroDto)) {
          throw new Error('Resposta inválida da API.')
        }

        if (!controlador.signal.aborted) {
          setCarros(transformarCarros(carrosDto))
        }
      } catch {
        if (!controlador.signal.aborted) {
          setErro(true)
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCarregando(false)
        }
      }
    }

    void carregarCarros()

    return () => controlador.abort()
  }, [tentativa])

  function tentarNovamente() {
    setTentativa((tentativaAtual) => tentativaAtual + 1)
  }

  return { carros, carregando, erro, tentarNovamente }
}
