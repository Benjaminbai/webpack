// webpack ./src/index.js -o ./build/built.js --mode=development
// webpack ./src/index.js -o ./build/built.js --mode=production


// 1. webpack自身能处理js，json文件，不能处理css/mg等资源
// 2. 生产环境比开发环境多了代码压缩

import "./index.css"
import data from './data.json'
console.log(111, data)
function add(x, y) {
    return x + y
}
console.log(add(1, 2))