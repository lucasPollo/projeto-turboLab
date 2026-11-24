# TURBOLAB

O TURBOLAB é uma aplicação acadêmica para consulta de veículos e simulação de preparação automotiva. O catálogo permite filtrar e pesquisar modelos, selecionar um veículo e comparar as estimativas de desempenho dos Stages 1, 2 e 3.

## Tecnologias utilizadas

- React
- TypeScript
- CSS

## Estrutura do projeto

A aplicação está organizada por responsabilidades:

- `src/components`: componentes gerais, como cabeçalho e rodapé;
- `src/cases/carros/components`: componentes do catálogo e da simulação;
- `src/cases/carros/hooks`: hook responsável pelo carregamento dos veículos;
- `src/cases/carros/dtos`: tipos e validação dos dados recebidos da API;
- `src/cases/carros/services`: conversão dos DTOs para o modelo usado pela interface;
- `src/data`: tipos da aplicação e vetor local dos Stages;
- `src/lib`: configuração do endereço da API.

## Integração com a API do Mockaroo

Os 12 veículos do catálogo são carregados diretamente da API do Mockaroo, sem proxy do Vite. O endereço utilizado pela aplicação está centralizado em `src/lib/api.ts`.

O hook `useCarros` executa o `fetch` dentro de um `useEffect`. A resposta é recebida inicialmente como `unknown`, validada pelo DTO e convertida pelo service para o tipo `Carro` antes de ser armazenada no estado. Valores numéricos que chegam como texto são convertidos para `number`, e apenas as marcas previstas pela aplicação são aceitas.

O carregamento também utiliza `AbortController` para cancelar a requisição caso o componente seja desmontado.

## Carregamento e tratamento de erros

Os estados de veículos, carregamento e erro são explicitamente tipados. Enquanto a requisição está em andamento, o catálogo exibe uma indicação visual de carregamento.

Falhas de conexão, respostas HTTP sem sucesso, JSON incompatível e dados inválidos levam ao estado de erro. Nesse caso, a interface apresenta uma mensagem e o botão **Tentar novamente**, que inicia uma nova requisição. A aplicação não substitui silenciosamente uma falha da API por dados locais.

## Pesquisa, filtros e Stages

A pesquisa de veículos é um campo controlado por `useState` e filtra os resultados por nome em tempo real. Ela funciona em conjunto com o filtro de marcas, permitindo restringir simultaneamente os modelos exibidos.

Ao selecionar um veículo, a área de simulação apresenta os valores originais e permite alternar entre Stage 1, Stage 2 e Stage 3. Os Stages continuam definidos em um vetor local, enquanto potência, torque, aceleração de 0 a 100 km/h e custo estimado de cada veículo são obtidos da API. Os gráficos comparam os valores originais com os valores preparados.

## Como executar

Requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

Após iniciar o servidor, abra no navegador o endereço exibido pelo Vite.

## Comandos de validação

```bash
npm run lint
npm run build
```

## Desafios bonificados

### Desafio 1 — Busca em tempo real

Campo controlado por `useState`, com filtragem instantânea por nome e integração com o filtro de marcas.

### Desafio 2 — Publicação

Publicação da aplicação no Railway, com acesso público e link disponibilizado neste README.

## Demonstração online

> URL pública do Railway: **https://turbolab.up.railway.app/**

