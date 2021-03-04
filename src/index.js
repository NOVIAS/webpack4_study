import printMe from "./print";
import './style.css'
import { cube } from './main'

function component() {
    const element = document.createElement('div');
    element.innerHTML = '这是一个div应该输出的部分' + cube(3);

    const btn = document.createElement('button');
    btn.innerHTML = '点击这里，然后查看console.log()'
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}
// webpack-dev-server 配置
// 储存 element 以在 print.js 修改时可以重新渲染, 在启用HMR 可以省略
// let element = component()
document.body.appendChild(component());

// webpack-dev-server 配置，在启用HMR之后，可以不用标注
// if (module.hot) {
//     module.hot.accept('./print.js', ()=>{
//         console.log('Accepting the updated printMe module!');
//         document.body.removeChild(element);
//         //  Re-render 重新渲染component 以便更新 click 事件处理函数
//         element = component();
//         document.body.appendChild(element);
//     })
// }