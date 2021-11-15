import "./index.css"

function add(x, y) {
  return x + y
}

console.log(add(2, 5))


console.log('index.js b被重新加载了') 

if(module.hot) {
  // module.hot.accept('./print.js', function() {
    //...
  // })
}