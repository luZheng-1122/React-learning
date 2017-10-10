# Personal Blog
Hi there, this is a personal blog demo with React, intended to well learn and practice the React techniques.

All the materials and libs are listed below:

## React Hot Loader Minimal Boilerplate

Bare minimum needed to have [React Hot Loader](https://github.com/gaearon/react-hot-loader) working with [webpack-dev-server](https://github.com/webpack/webpack-dev-server) and [Babel latest](https://babeljs.io/docs/plugins/preset-latest/) plugin.

See the [Migration to 3.0 guide](https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30) on React Hot Loader repo.

```
npm run dev
```

## [axios](https://github.com/axios/axios)

### install
```
$ npm install axios
```

### notes when using axios
1. default validate status that the axios will receive is [200,300), which means if you want to receive the response which status is beyond this range, you need to change it mannaully:
```
validateStatus: function (status) {
    return status >= 200 && status < 300; //default
  },
```
2. using axios with redux-promise: redux-promise is a middleware applied on reducers, when the reducer receives a new state from axios, using the value directly is complex, where the promise works for retriving the data to the format that we can easily use.

## react redux
### install
```
npm install --save redux
```

### notes when using redux
1. redux store
1. redux persist: sovle the problem of refreshing clean all the data in reducer.
1. redux form: initialize form from state, use 'enablerReinitialise' property


## react router
### install
```
$ npm install --save react-router
```
### notes when using react router
1. history 必须加上，switch写在中间，好处是可以写所有页面公共的部分，将需要变化的component写在switch里面
1. [route to a ‘page not found’ problem in react router](https://stackoverflow.com/questions/43309710/react-router-dom-v4-nested-routes-not-working?rq=1)
3. [nested route](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/04-nested-routes)
4. pass argument through router: path: '/yourPath/:id', get this argument at the page you route to through this.props.match.params.id