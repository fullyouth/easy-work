const path = require('path');
const components = require('../src/components/index'); // 组件列表（如 ['Button', 'Header']）

module.exports = components.map(component => ({
  entry: `./src/components/${component}/index.js`, // 组件入口文件
  mode: 'production', // 生产模式
  output: {
    path: path.resolve(__dirname, '../public/components'),
    filename: `${component}.[contenthash:6].js`, // 输出文件名
    // 暴露为全局变量（如 window.EASY_COMPONENTS.Header）
    library: {
      name: `EASY_COMPONENTS.${component}`, // 全局变量名
      type: 'umd', // 支持多种模块化方案
    },
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: {
    react: 'React', // 避免重复打包 React
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      // 处理 JSX/TSX + React
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react', // 关键：支持 JSX
              '@babel/preset-typescript',
            ],
            // plugins: [
            //   '@babel/plugin-proposal-class-properties',
            //   '@babel/plugin-transform-runtime',
            // ],
          },
        },
      },
      // 处理 CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}));