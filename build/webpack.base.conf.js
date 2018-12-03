/*
create by ppg -.-
*/
"use strict";

//引入node path路径模块
const path = require("path");
//引入webpack生产环境配置参数
const prodConfig = require("../config").build;

//拼接路径
function resolve(track) {
    return path.join(__dirname, "..", track);
  }
  //资源路径
  function assetsPath(_path) {
    return path.join(prodConfig.staticPath, _path);
  }

  module.exports = {
    entry:path.resolve(__dirname,'../src/main.js'),
    resolve: {
        //自动解析文件扩展名(补全文件后缀)(从左->右)
        // import hello from './hello'  （!hello.js? -> !hello.vue? -> !hello.json）
        extensions: [".js", ".vue", ".json"],
        //配置别名映射
        alias: { 
        'vue$': 'vue/dist/vue.common.js',
          "@": resolve("src")
        }
      },
      module:{//处理模块的规则(可在此处使用不同的loader来处理模块！)
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                },
                include:resolve("src")
            }
            

        ]
      }
  }