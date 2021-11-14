// import '@babel/polyfill'

const add = (x, y) => {
  return x + y;
}
// eslint-disable-next-line
console.log(add(2, 5));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('done')
    resolve()
  }, 1000)
})
// eslint-disable-next-line
console.log(promise);
