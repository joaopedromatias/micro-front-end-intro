# Micro Front End

## What Is?

**Micro Front End** allows each team to work on their own codebase for inside of a given project. It allows components and functionalities sharing between those codebases and teams. For example: checkout page and product page have different codebases and teams, but both can consume codes (like components) from the homepage.

Micro Front End can be used on the majority of frameworks (React, Vue, Angular, Svelte).

One of the most advantages of micro front ends is that it makes possible for each team have its deploy cycle. Moreover, it provides more organization in the codebase and in the repository management. 

👉 https://micro-frontends.org/

When a team get a new version of a project deployed, the shared javascript will be automatically updated for all the consumers. For that, it needs to be served as a **static asset**.

This Micro Front End example resides on the **`Module Federation`** technology, which is a webpack feature.

What is exposed on the `webpack.config.js` for a project, like so: 

```js
// webpack.config.js  |  home project

...
new ModuleFederationPlugin({
    name: "home", // project name
    filename: "remoteEntry.js", // route where the shared code will be available
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
    <Header /> {/* use it! */}
  </div>
);

```

***Async Importing***

The shared components can be imported asynchronously, by using React.lazy() and Suspense.

***Error Handling***

Since using MF makes our code depends on external resources, it is important to have proper error handling for each external usage.

In React a good way to get around this is by using the **`Error Boundary`** component.

***Share Application State***

In the header example above, the home application is the remote, while the pdp application is the host.

  