# webpack


## webpack 性能优化
1. 开发环境的性能优化
  - 优化打包速度
  - 优化代码调试
  
2. 生产环境的性能优化
  - 优化打包构建速度
  - 优化代码的性能


## 缓存
1. babel缓存
2. 文件资源缓存
  - 使用hash值： webpack构建时都会生成唯一的hash值
  - 使用chunkhash： 根据chunk生成的hash值，同属于一个chunk的文件，hash值就相同
  - 使用contenthash： 根据文件内容生成的hash值，不同文件的hash值不一样
