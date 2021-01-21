const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: true,
    devServer: {
        port: 8080,
        proxy: {
            ['^(?!/login)']: {
                target: 'http://localhost:8081',
                ws: true,
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
};
