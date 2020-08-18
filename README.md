## Dependency Packages

- react
- redux
- redux-saga
- immer
- react-router-dom
- styled-components
- material-ui

## Quick Start

### 1. Installation

```
git clone --depth=1 --branch=master https://github.com/n1ghtdev/react-starter-kit.git
```

_Do not forget to remove `.git` folder_

```
rm -rf ./react-starter-kit/.git
```

### 2. Run `npm install`

This will install all project dependencies from [package.json](./package.json)
file.

### 3. Run `npm start`

Will start `webpack-dev-server` with hot-reloading on
[localhost:3000](http://localhost:3000).

### 4. Run `npm run build`

This command will build you project into `build` folder.

## Directory Structure

```
.
| -- build                   # Folder with compiled code
| -- src                     # Source code of project
|    | -- assets             # Images/fonts etc.
|    | -- components         # React presentational/ui components
|    | -- containers         # React containers
|    | -- pages              # React routes
|    | -- modules            # Redux (reducers, actions, sagas)
|    | -- utils              # Util functions
|    | -- styles             # Styles/theme
|    | -- index.html         # Root index.html
|    | -- index.jsx          # Entry point for scripts
| -- webpack                 # Webpack configurations
```
