# Dziro web app
*Web application to manage wishlists.* 

This is a monorepo built with the help of TurboRepo.

## Install

To install all dependencies, you should first use
```bash
$ npm i
```

## Start

Once everything is installed, you can start start all or filtered apps.


```bash
# all apps
$ npx turbo dev


# filter one
$ npx turbo dev --filter=pro
```

> *Note  
To run the pro app, you should run first the backend service with the mongo db database.

## Compile

To create a production version of ann app you can use the command build.

```bash
# To build all apps
$ npx turbo build

# To build a filtered app
$ npx turbo build --filter=free
```

## TODO
- [ ] Create docs app
- [ ] Add unit test to components
- [ ] Remove use of firebase
