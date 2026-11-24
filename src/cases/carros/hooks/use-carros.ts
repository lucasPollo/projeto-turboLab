import { useEffect, useState } from 'react'
import { API_URL } from '../../../lib/api'
import type { Carro } from '../../../data/tipos'
import type { CarroDto } from '../dtos/carro'
import { transformarCarros } from '../services/carros-service'

export function useCarros() {
  const [carros, setCarros] = useState<Carro[]>([])
  const [carregando, setCarregando] = useState<boolean>(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const controlador = new AbortController()

    async function carregarCarros() {
      try {
        setCarregando(true)
        setErro(null)

        const resposta = await fetch(API_URL, { signal: controlador.signal })
        if (!resposta.ok) {
          throw new Error(`Não foi possível carregar os veículos (HTTP ${resposta.status}).`)
        }

        const carrosDto: unknown = await resposta.json()
        if (!Array.isArray(carrosDto)) {
          throw new Error('O catálogo de veículos possui um formato inválido.')
        }

        if (!controlador.signal.aborted) {
          setCarros(transformarCarros(carrosDto as CarroDto[]))
        }
      } catch (erroDesconhecido) {
        if (!controlador.signal.aborted) {
          const mensagem = erroDesconhecido instanceof Error
            ? erroDesconhecido.message
            : 'Não foi possível carregar o catálogo de veículos.'

          setErro(mensagem)
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCarregando(false)
        }
      }
    }

    void carregarCarros()

    return () => controlador.abort()
  }, [])

  return { carros, carregando, erro }
}
