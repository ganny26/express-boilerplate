# Express JS with Babel

## Getting Started

```bash
git clone git@github.com:ganny26/express-boilerplate.git
cd express-boilerplate

yarn install

```

Then you can begin development:

```bash
# yarn
yarn dev

```

Production build

```bash
yarn build
yarn start

```

- How to set config variables

Common config variables are present in `config/` folder
this project uses [config](https://www.npmjs.com/package/config) which simply hold all your config's inside json.

- How to get config variables inside code

```js
const config = require("config");

config.get("port");
config.get("base_url");
```

## How to run on docker

```bash

docker build -t myapp .
docker run -d --name myapp1 -p 3000:80 myapp

```

## Babel Plugins

https://babeljs.io/docs/en/plugins/

### For further design check below links

- https://medium.com/codebase/structure-of-a-nodejs-api-project-cdecb46ef3f8
- https://www.terlici.com/2014/08/25/best-practices-express-structure.html
- https://medium.freecodecamp.org/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c
- https://codeburst.io/fractal-a-nodejs-app-structure-for-infinite-scale-d74dda57ee11
