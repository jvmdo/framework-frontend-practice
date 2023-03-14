---
title: 'NextJS Foundations'
date: '2023-03-14'
---

## What is NextJS

Next.js is a powerful full-stack framework built on top of React. It simplifies the tooling and configuration required for a React application, while also offering advanced features such as server-side rendering, data fetching, routing, serverless functions. With Next, developers can focus on building their application logic and user interface, while leaving the heavy lifting of deployment and optimization to the framework.

## Rendering

Rendering is the process of transforming React code into HTML (i.e., JSX --> HTML). It can take place on the server or on the client, happening either ahead of time (at build time) or on every request (at runtime).

With Next.js, three types of rendering methods are available: Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR).

> **Pre-Rendering**. SSR and SSG are also referred to as Pre-Rendering because the fetching of external data and rendering happen before the result is sent to the client.

### Client-Side Rendering

CSR is the default behavior in React. When a user requests a page, the server sends an empty HTML file and a JavaScript file to the client, which renders the UI using JavaScript code. This means that the initial UI state is a blank page until the JS code runs on the client-side to generate the actual UI that the user sees on the screen. CSR allows for dynamic and interactive user interfaces without requiring a full page refresh.

### Server-Side Rendering

SSR is the default behavior in Next.js. When a user requests a page, the server generates and sends non-interactive HTML, a JavaScript file, and a JSON data file to the client. The HTML code is used to render the initial UI state, which includes page content but no interactivity. The JS code then runs on the client-side to make the page fully interactive. This approach allows for faster initial load times and improved SEO, since search engines can crawl the fully rendered HTML content.

> **Hydration**. The process of adding interactivity to pre-rendered pages without having to refresh the entire page.

### Static Site Generation

Static Site Generation (SSG) is another rendering pattern offered by Next.js. When a user requests a page, the server sends back the complete HTML for that page without having to compute it, because the pre-rendering process is done at build time. If some page only contains static content, Next will automatically assume it's static. This allows for faster page loads and improved SEO, since search engines can index the fully rendered HTML content.

> Next.js provides developers with the flexibility to choose the most appropriate rendering method for their use case, allowing them to optimize page load times and user experience on a page-by-page basis.
