<br/>
<br/>
<p align="center" style="box-shadow: 2px">
  <a href="https://react.dev/" rel="noopener" target="_blank" ><img width="200" src="https://github.com/hedaukartik/bun-react-csr-base/assets/35377972/5f7fac52-5225-4bb2-83a9-1c597d51cebc" alt="react"></a>
  <a href="https://bun.sh/" rel="noopener" target="_blank" ><img width="200" src="https://bun.sh/logo-square.png" alt="bun"></a>
</p>

<h1 align="center">React client side rendering apps tooled with Bun</h1>

<div align="center">

Powerful React app building using Bun runtime, bunder, transpiler, package manager and test runner.

</div>

## You need `bun` installed in your system for this template:

```bash
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
```

### To use this template to start a new react client-side rendering project from scratch:

```bash
bun create https://github.com/hedaukartik/bun-react-csr-base name-of-your-project
```

### To install dependencies:

```bash
bun install
```

### To run:

```bash
bun dev
```

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
    
### node_modules after first working react app-

<img width="316" alt="image" src="https://github.com/hedaukartik/bun-react-csr-base/assets/35377972/53a584dd-8675-4b02-ba51-f6a33789c93f">


### Known issues to fix:
* [x] Routing using react-router-dom during CSR.
* [x] Page refresh on sub-routes should show the correct screen and not file not found.
* [x] If any file is changed in the `./src` folder, a new build should be created to show the latest changes.
* [ ] When lazy loading components, bun bundler does not import the files as expected to fix. https://github.com/oven-sh/bun/issues/9151
