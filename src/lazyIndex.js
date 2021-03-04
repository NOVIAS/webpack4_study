// const { spuare } = require("./main");

function Component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const br = document.createElement("br");

  // btn.innerHTML = "Click me" + spuare(3);
  btn.innerHTML = "Click me";
  element.innerHTML = "Hello";
  element.appendChild(br);
  element.appendChild(btn);

  btn.onclick = (e) =>
    import(/* webpackChunkName: 'printChunk' */ "./print").then((module) => {
      let print = module.default;
      print();
    });

  return element;
}

document.body.appendChild(Component());

// 注册Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => [
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered:", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed", registrationError);
      }),
  ]);
}
