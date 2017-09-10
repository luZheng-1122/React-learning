import React, {Component} from 'react'
import css from './test.css'
import './app.less'
// const Root = () => (
//   <div>Hello React Hot Loader!</div>
// )
class Root extends Component {

  componentWillMount() {
    const data = require('/Users/zhenglu/Documents/GitHub/blog-react-hot-loader/src/containers/config.json');
    console.log(data);
  }

  render() {
    return(
      <div id="test">Hello</div>
    );
  }
}

export default Root
