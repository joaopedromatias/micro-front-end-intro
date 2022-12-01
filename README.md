# Micro Front End

## What Is?

The **micro front end** concept allows that multiple teams work on different codebases for the same project. It also allows components sharing between those codebases. For example: checkout page and product page may have different codebases and get shared codes from the homepage.

What is exposed on the webpack.config.js for a project, like so: 

```js
// webpack.config.js  |  home project

...
new ModuleFederationPlugin({
    name: "home",
    filename: "remoteEntry.js",
    remotes: {},
    exposes: {
    "./Header": './src/components/Header' // share the component
    },
    ...})
```

Will be available for the other project by adding a remote: 

```js
// webpack.config.js  |  pdp project

...
new ModuleFederationPlugin({
    name: "pdp",
    filename: "remoteEntry.js",
    remotes: {
    home: "home@http://localhost:3000/remoteEntry.js" // allows the usage of components shared by the home project
    },
    exposes: {},
    ...})

// App.js 

import Header from "home/Header"; // import the Header component exported from the home project

const SomeComponent = () => (
  <div className="container">
    <Header /> 
  </div>
);

```








O micro front end segue a mesma ideia de micro serviços no backend. A codebase é separada, de forma que os times são reduzidos e os ciclos de deploys são individuais para cada time. Isso fornece agilidade, manutenção e organização aos projetos.

Pode ser que e-commerce X times trabalhem no micro front end de algum e-commerce, com X frentes diferentes. Se todos estiverem trabalhando na mesma codebase, sobre o mesmo ciclo de deploy, as coisas tendem a ficar confusas e desorganizadas a longo prazo.

Quando um time der deploy mudando a estilização de um componente, esse componente é automaticamente atualizado em toda a aplicação, mesmo que esteja sendo usado por outro time.

A **tecnologia** utilizada para o Micro Front End é o **`Module Federation`,** que é uma feature do webpack (v5 em diante). Essa tecnologia pode ser aplicada a diversos frameworks (React, Vue, Angular, etc.)

`npx create-mf-app` → interactive CLI, we choose if it is a server, frontend, languages, frameworks, etc.

### Without MF

Precisa do deploy de todas as partes. A arquitetura mostrada é um sistema de Design System.

![Captura de Tela 2022-11-30 às 08.07.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c81fc86-ec44-46b2-b3ae-648a6567a245/Captura_de_Tela_2022-11-30_as_08.07.31.png)

### Solution - Without MF

Entrega de arquivos estáticos para as aplicações, não demanda o deploy das aplicações. É como um design system que não reside em um pacote NPM. 

Essa solução envolve muito trabalho de CI/CD e infra. Além disso, cria dependência externa e necessidade de fazer requisições para construir a UI, reduzindo a performance.

![Captura de Tela 2022-11-30 às 08.10.27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7157cb6-9f19-4fc2-9912-ffcc0188abdf/Captura_de_Tela_2022-11-30_as_08.10.27.png)

### Solution - MF

Não exige trabalho de infra, a importação é direta e o deploy é dinâmico.

![Captura de Tela 2022-11-30 às 08.14.11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f26bcdf-a449-48f0-9542-c744662b1cc5/Captura_de_Tela_2022-11-30_as_08.14.11.png)

***Async***

Os componentes pode ser importados para a PDP de forma `**assíncrona**`, usando Lazy Loading envolto no componente `<Suspense />`

Os componentes importados podem ser muito leves.

***Singleton***

Todas as dependências do projeto Home são compartilhadas com o projeto PDP. O **React** e o **React Dom** são compartilhados de modo singleton, para evitar que se tenham mais um React por página (evita muitos problemas). 

***Error Handling***

O que acontece se uma das aplicações der erro, como cair o servidor? 

Isso é resolvido no deploy, pois o deploy do Module Federation deve ser feito no `S3` de forma que os componentes sejam *`static assets`.* Assim temos uma `static asset store`. Ainda há o risco desse sistema falhar e ficarmos sem o componente (mas esse risco é muito baixo).

Uma coisa que devemos nos preocupar mais é se algum dev trocar o `**contrato da API**`, por exemplo inserir alguma prop nova no componente, que o time da PDP não está passando para o componente. Isso pode estourar um erro no componente e derrubar a página da PDP. 

Para se proteger disso usamos **`Error Boundary`** (em React, mas em outros frameworks há conceitos e funcionalidades similares que funcionam da mesma forma). Error Boundary precisa ser um class component