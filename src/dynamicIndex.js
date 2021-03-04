// function getComponent() {
//     return import(/* webpackChunkName: 'mainChunk' */ './main').then(({ spuare }) => {
//         const element = document.createElement('div');
//         element.innerHTML = spuare(3)
//         return element;
//     }).catch(error => 'An error occurred while loading the component')
// }

// async 方式 引入
// 处理动态导入 以 async 语法
const path = require("path");
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

async function getComponent() {
  const { spuare } = await import(
    /* webpackChunkName: 'mainAsyncChunk', webpackProLoad: true */ "./main"
  );
  const element = document.createElement("div");
  element.innerHTML = "这里是async方式创建的" + spuare(4);
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
