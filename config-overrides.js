const {
    override,
    fixBabelImports,
    addLessLoader
  } = require('customize-cra')
  
  module.exports = override(
    // ...
  
    // antd按需加载 - babel-plugin-import
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),
    // addLessLoader({
    //     javascriptEnabled: true,
    //     // modifyVars: {''}
    // })
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
        relativeUrls: false,
        modifyVars: { '@primary-color': '#A80000' },
        // cssModules: {
        //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
        // }
      } 
    })
  ) 
