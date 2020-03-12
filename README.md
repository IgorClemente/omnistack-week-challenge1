<h1 align="center">
    <img alt="GoStack" src="wallpapers/wallpaper_main.png" width="1000px" />
</h1>

<h3 align="center">
  OmniStack 10: API NodeJS
</h3>

<p align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/IgorClemente/omnistack-week-challenge1?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Igor Clemente" src="https://img.shields.io/badge/made%20by-Igor Clemente-%2304D361">
  </a>

  <img alt="Issues" src="https://img.shields.io/github/issues/IgorClemente/omnistack-week-challenge1">

  <img alt="Forks" src="https://img.shields.io/github/forks/IgorClemente/omnistack-week-challenge1">

  <a href="https://github.com/IgorClemente/omnistack-week-challenge1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/IgorClemente/omnistack-week-challenge1">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/IgorClemente/omnistack-week-challenge1">
</p>

<p align="center">
  <a href="#rocket-descrição">Objetivo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-iniciando-a-aplicação">Iniciando aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Descrição

Aplicação Backend desenvolvida no modelo RestFul para Barbearias, o cliente através do aplicativo Mobile busca um horário disponível na agenda do prestador de serviços, no caso, o Barbeiro. O Barbeiro tem acesso a sua agenda através da interface WEB, onde ele visualiza quem ele vai atender em determinado horário - Essa aplicação executa no servidor [NodeJS](https://nodejs.org/en/).

Nesse módulo utilizei a aplicação desenvolvida previamente. Nele aplico alguns patterns para organizar o código, e utilizo o redis para cache de requisições.

### Rotas

- `POST /users`: Rota responsável por criar o usuário dentro da plataforma, utilize os seguintes parâmetros: `name` : Nome Completo, `email` : E-mail no formato `example@example.com`, `password` : Senha com 6 digítos, alfanumérica, `provider` : `true` ou `false` indicando se o usuário criado é provedor de serviço ou não. `Exemplo`:

```js
{
	"name" : "Nome Completo",
	"email" : "teste@teste.com",
	"password" : "123456",
	"provider": true
}
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Projeto desenvolvido by Igor Clemente :wave:
