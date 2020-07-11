/* 这是js入口文件 */
import React from 'react';
import ReactDOM from 'react-dom';
// 如果要使用路由模块，yarn add react-router-dom,导入路由模块，采用按需导入的方式
import { HashRouter, Route, Link } from 'react-router-dom';
import App from './component/App.jsx';
/* 
1.其中，HashRouter表示一个路由根容器，将来所有路由相关的东西，都要包裹在HashRouter容器中。并且，一个网站中只要使用一次HashRouter就好了
2.route 表示一个路由规则，在route上有两个比较重要的路由属性，分别是path和component
类比在vue中：
var router=new VueRouter({
    routes:[
        {path:'',component:''}
    ]
});
3.Link表示一个路由的链接，就好比vue中的router-link(to属性)，在Link中也有一个to属性
*/
// const l1 = React.createElement('li', null, 'one');//列表项不设置key，将提示警告:Warning: Each child in a list should have a unique "key" prop.
// const l1 = React.createElement('li', { key: 1 }, 'one'); //列表项不设置key，将提示警告:Warning: Each child in a list should have a unique "key" prop.
// const l2 = React.createElement('li', { key: 2 }, 'two');
// // const content = React.createElement('ul', { title: '这是一个ul列表' }, l1, l2);
// const content = React.createElement('ul', { title: '这是一个ul列表' }, [
//   l1,
//   l2,
// ]);
// ReactDOM.render(content, document.getElementById('app'));
ReactDOM.render(
  <div>
    <App></App>
  </div>,
  document.getElementById('app'),
);
