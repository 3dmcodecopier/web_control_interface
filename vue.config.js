
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: {
    App: {
      entry: './src/main.ts',
      // template: 'public/index.html',
      // filename: 'index.html',
    },
    WindowsApp: {
      entry: './src/Windows/main.ts',
      template: 'public/WindowsAppIndex.html',
      filename: 'WindowsAppIndex.html'
    }
  },
  productionSourceMap: false,

  outputDir: 'D:/CFETWidget/CFET2WidgetUIZyz-output',
  // outputDir: '/CFET2WidgetUI_output',
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8001/',
        secure: false,
        changeOrigin: true
      }
      /* '/CT':{
            target:"http://192.168.43.122:8003",
            changeOrigin:true,
            pathRewrite:{
                '^/CT':'/'
            }
        } */
    }
  }
}

// {"Idle":"Idle","Pre1":"prepare1","Pre2":"prepare2","Pre3":"prepare3","Pre4":"prepare4","Ready":"Ready","Error":"Error","Fire":"Fire"}
// {"Idle":"yellow","prepare1":"#ff8020","prepare2":"#ffa020","prepare3":"#ffc020","prepare4":"#ffff20","Ready":"green","error":"red","Fire":"blue" }
