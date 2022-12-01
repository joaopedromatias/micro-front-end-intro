# Micro Front End

## What Is?

The **micro front end** concept allows that multiple teams work on different codebases for the same project. It also allows components sharing between those codebases. For example: checkout page and product page may have different codebases and teams, but both can get codes (like components) from the homepage.

Micro Front End can be used on the majority of frameworks (React, Vue, Angular, Svelte).

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

One of the most advantages of micro front ends is that it makes possible for each team have its deploy cycle. Moreover, it provides more organization in the codebase and in the repository management. 

When a team get a new version of a projec deployed, the shared javascript objects will be automatically deployed for all the consumers.

A **tecnologia** utilizada para o Micro Front End é o **`Module Federation`,** que é uma feature do webpack (v5 em diante). Essa tecnologia pode ser aplicada a diversos frameworks (React, Vue, Angular, etc.)

The Micro Front End resides on the **`Module Federation`** technology, which is a webpack feature.

***Async Importing***

The shared components can be imported asynchronously, by using React.lazy() and Suspense.

***Error Handling***

Since using MF makes our code depends on external resources, it is important to have proper error handling for each external usage.

In React a good way to get around this is by using the **`Error Boundary`** component.

***Share Application State***

In the header example above, the home application is the remote, while the pdp application is the host