# Moedas Hoje API

Oi, este é um projeto aberto e você também pode contribuir com ele.

## Ideia

O foco e a ideia deste projeto é reunir o máximo de informações do mercado financeiro centralizado e descentralizado em um só lugar, envolvendo moedas comerciais tradicionais e moedas digitais (criptomoedas).

## Motivo

Este projeto foi amadurecendo de acordo a minha necessidade, em alguns momentos eu precisei comparar valores de criptomoedas entre várias exchanges. Ficar acessando as transações entre uma e outra às vezes pode ser um pouco complicado, por isso, decidi centralizar o máximo possível essas informações em um único lugar.

## Documentação

A documentação deste projeto pode ser encontrada em

* DOCS: https://doc.moedashoje.com.br ou https://api.moedashoje.com.br/v1

## Contribuir

Construída com Next.js e implementada pela Vercel, acredito que esta API tenha uma base muito sólida, pois o framework é usado por grandes empresas como Marvel, Twitch, Nike, TypeForm, Nubank, Ferrari, Square Enix, entre outras.

Entregar todos os recursos que a API tem disponível é essencial, é aí que a Vercel se encaixa, ela é muito boa em entregar conteúdo. Consumindo a CDN de forma moderada, conseguimos entregar disponibilidade, qualidade e estabilidade.

## Como funciona

Esta API possui um recurso principal onde faz toda a mágica acontecer <TickersController>. Disponibilizamos um controle capaz de fazer as requisições em todas as APIs externas cadastradas de uma única vez, depois de concluir a requisição é feito a serialização das informações recuperadas, desta forma podemos garantir um retorno único e padronizado.

Para cada rota é adicionado um time que é enviado para a CDN da Vercel, este time se faz necessário para garantir que não haja abuso de requisições para as APIs externas, sendo assim, toda vez que o time expirar, a Vercel se encarrega por validar e carregar dados atualizados em cache.

> Obs: Normalmente o cache tem uma duração de 3 a 5 segundos.

## Executando o projeto

### Requisito

* Node 14+
* npm ou yarn

Faça o clone do repositório para o seu localhost, em seguida execute as comandos para instalar os pacotes.

```
yarn add

#or

npm install
```

Em seguida execute.

```
yarn dev

#or

npm run dev
```

Depois de executar o comando, as rotas ficam disponível em: http://localhost:3000/api

Ou se preferir você também pode iniciar com Vercel CLI.

```
vercel dev
```

Depois de executar o comando as rotas ficam disponível em: http://localhost:3000

> Obs: Você deve ter uma conta na Vercel para que este comando funciona localmente, mais informações em: https://vercel.com/docs/cli#commands/dev e https://vercel.com/.

## Autor

| [<img src="https://github.com/ediano.png?size=115" width=115><br><sub>@ediano</sub>](https://github.com/ediano) |
| :---: |
