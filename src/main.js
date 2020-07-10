/* 这是js入口文件 */
import React from 'react';
import ReactDOM from 'react-dom';
// const l1 = React.createElement('li', null, 'one');//列表项不设置key，将提示警告:Warning: Each child in a list should have a unique "key" prop.
// const l1 = React.createElement('li', { key: 1 }, 'one'); //列表项不设置key，将提示警告:Warning: Each child in a list should have a unique "key" prop.
// const l2 = React.createElement('li', { key: 2 }, 'two');
// // const content = React.createElement('ul', { title: '这是一个ul列表' }, l1, l2);
// const content = React.createElement('ul', { title: '这是一个ul列表' }, [
//   l1,
//   l2,
// ]);
// ReactDOM.render(content, document.getElementById('app'));
ReactDOM.render(<div>123</div>, document.getElementById('app'));
