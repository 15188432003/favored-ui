import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano"
import autoprefixer from "autoprefixer"
export default {
  input: "./src/index.js",
  output: [{
      file: './lib/favored-umd.js',
      format: 'umd',
      name: 'myLib'
    },
    {
      file: './lib/favored-es.js',
      format: 'es'
    },
    {
      file: './lib/favored-cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      plugins: [
        autoprefixer(),
        cssnano()
      ],
      extract: 'css/index.css'
    }),
    vue({
      style: {
        postcssPlugins: [
          autoprefixer()
        ]
      }
    }),
    commonjs(),

  ],
  external: [ //外部库， 使用'umd'文件时需要先引入这个外部库
    'vue'
  ]
}


// import pkg from './package.json'
// // 等 rollup-plugin-vue 发版后在切换官方版
// // 暂时先用本地的 rollup-plugin-vue
// // 修复了 render 函数的编译问题，但是还没发版
// // import vuePlugin from 'rollup-plugin-vue'
// // const vuePlugin = require('rollup-plugin-vue')
// import vuePlugin from 'rollup-plugin-vue' //vue文件处理
// import scss from 'rollup-plugin-scss' //scss文件处理
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs' //将CommonJS模块转换为 ES2015 供 Rollup 处理
// import json from '@rollup/plugin-json'
// import replace from '@rollup/plugin-replace'
// import babel from '@rollup/plugin-babel' //编译es6
// import {
//   terser
// } from 'rollup-plugin-terser' //压缩js代码，包括es6代码压缩

// const name = 'Element3'

// const createBanner = () => {
//   return `/*!
//   * ${pkg.name} v${pkg.version}
//   * (c) ${new Date().getFullYear()} kkb
//   * @license MIT
//   */`
// }

// const createBaseConfig = () => {
//   return {
//     input: 'src/index.js',
//     external: ['vue'],
//     plugins: [
//       peerDepsExternal(),
//       resolve({
//         extensions: ['.vue', '.jsx']
//       }),
//       vuePlugin({
//         css: true,
//       }),

//       scss({
//         include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
//         output: "css/style.css",
//         failOnError: true,
//       }),
//       babel(),
//       commonjs(),
//       json(),

//     ],
//     output: {
//       sourcemap: false,
//       banner: createBanner(),
//       externalLiveBindings: false,
//       globals: {
//         vue: 'Vue'
//       }
//     }
//   }
// }

// function mergeConfig(baseConfig, configB) {
//   const config = Object.assign({}, baseConfig)
//   // plugin
//   if (configB.plugins) {
//     baseConfig.plugins.push(...configB.plugins)
//   }

//   // output
//   config.output = Object.assign({}, baseConfig.output, configB.output)

//   return config
// }

// function createFileName(formatName) {
//   return `lib/favored-ui.${formatName}.js`
// }

// // es-bundle
// const esBundleConfig = {
//   plugins: [
//     replace({
//       __DEV__: `(process.env.NODE_ENV !== 'production')`
//     })
//   ],
//   output: {
//     file: createFileName('esm-bundler'),
//     format: 'es'
//   }
// }

// // es-browser
// const esBrowserConfig = {
//   plugins: [
//     replace({
//       __DEV__: true
//     })
//   ],
//   output: {
//     file: createFileName('esm-browser'),
//     format: 'es'
//   }
// }

// // es-browser.prod
// const esBrowserProdConfig = {
//   plugins: [
//     terser(),
//     replace({
//       __DEV__: false
//     })
//   ],
//   output: {
//     file: createFileName('esm-browser.prod'),
//     format: 'es'
//   }
// }

// // cjs
// const cjsConfig = {
//   plugins: [
//     replace({
//       __DEV__: true
//     })
//   ],
//   output: {
//     file: createFileName('cjs'),
//     format: 'cjs'
//   }
// }
// // cjs.prod
// const cjsProdConfig = {
//   plugins: [
//     terser(),
//     replace({
//       __DEV__: false
//     })
//   ],
//   output: {
//     file: createFileName('cjs.prod'),
//     format: 'cjs'
//   }
// }

// // global
// const globalConfig = {
//   plugins: [
//     replace({
//       __DEV__: true,
//       'process.env.NODE_ENV': true
//     })
//   ],
//   output: {
//     file: createFileName('global'),
//     format: 'iife',
//     name
//   }
// }
// // global.prod
// const globalProdConfig = {
//   plugins: [
//     terser(),
//     replace({
//       __DEV__: false
//     })
//   ],
//   output: {
//     file: createFileName('global.prod'),
//     format: 'iife',
//     name
//   }
// }

// const formatConfigs = [
//   esBundleConfig,
//   esBrowserProdConfig,
//   esBrowserConfig,
//   cjsConfig,
//   cjsProdConfig,
//   globalConfig,
//   globalProdConfig
// ]

// function createPackageConfigs() {
//   return formatConfigs.map((formatConfig) => {
//     return mergeConfig(createBaseConfig(), formatConfig)
//   })
// }

// export default createPackageConfigs()