<div center>
  <h1>UpBeat</h1>
  <h2>up-beat - opensource self hosted server health monitor</h2>
  <h4>This project is under development</h4>
</div>

## Quick Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/soorajshankar/up-beat)

## Description

[Nest](https://github.com/nestjs/nest) server monitoring system

## Environment

Example .env file is given for reference as (example.env). For local development use the following command after cloning the project.

```shell
cp example.env .env
```

## Branching model

We use [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. The base branch is `dev`.
If you are looking for a stable version, please use the `master` or tags labelled as `v1.x.x`.

## Installation

```bash
$ npm install
```

## Running the app

### Docker instance

```bash
# build docker image
docker-compose build

# build start instance
docker-compose up
```

open browser and navigate to [http://localhost:3000/](http://localhost:3000/)
open graphiQl and navigate to [http://localhost:3000/graphql](http://localhost:3000/graphql)

### Dev server

```bash
# development server
$ yarn start:server

# run react dev server
$ yarn start:client

# rebuild ui and start server
$ npm run start:prodserver
```

open browser and navigate to [http://localhost:9000/](http://localhost:9000/)
open graphiQl and navigate to [http://localhost:9000/graphql](http://localhost:9000/graphql)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
