const {
    override,
    fixBabelImports,
    addLessLoader,
} = require('customize-cra');

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: true
    }),
    addLessLoader({
        modifyVars: { '@primary-color': '#f168ff' }, //主体颜色，可以设置多个
        javascriptEnabled: true,
    })
);``