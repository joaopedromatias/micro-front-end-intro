# Micro Front End

This project is a Micro Front End study. 

In this project I joined components and funcionalities from 3 different applications: `home`, `pdp` and `cart` into one single application `app`. 

The data is delivered by the `server` backend application.

<hr />

**Micro Front End** allows each team to work on their own codebase for a given project. It allows components and functionalities to be sahred among those codebases. For example: checkout page and product page have different codebases and teams, but both can consume JavaScript code (like a component) from the homepage.

Micro Front End can be used on the majority of frameworks (React, Vue, Angular, Svelte), where each application can use what fits best.

One of the advantages of micro front ends is that it makes possible for each team to have its deploy cycle. Moreover, it allows more organization for the each single codebase and for its repository management.

👉 https://micro-frontends.org/

When a team get a new version of a project deployed, the shared javascript will be automatically updated for all the consumers. For that, the application needs to be served as a **static asset** with fast response.

This Micro Front End example resides on the **`Module Federation`** technology, which is a webpack feature.

```js
// webpack.config.js  |  home project

...
new ModuleFederationPlugin({
    name: "home", // project name
    filename: "remoteEntry.js", // route where the shared code will be available
    remotes: {},
    exposes: {
      "./Header": './src/components/Header' // share this component as 'home/Header'
    },
    ...})
```

It will be available for other projects by adding a remote project:

```js
// webpack.config.js  |  pdp project

...
new ModuleFederationPlugin({
    name: "pdp",
    filename: "remoteEntry.js",
    remotes: {
      home: "home@http://localhost:3000/remoteEntry.js" // allows the usage of all code shared by the home project
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

The shared components can be imported asynchronously normally, by using **`React.lazy()`** and **`Suspense`**.

***Error Handling***

Since using MF makes our code depends on external resources, it is important to have proper error handling. In React a good way to do it is by using an **`Error Boundary`** component.

***State Management***

To do a state management on Micro Front Ends it is important to use reactive JS libraries, like **`rxjs`**. This allows to update states when some action occurs, like updating the cart object.

**Reference**: https://www.youtube.com/watch?v=lKKsjpH09dU&t=107s 