module.exports = {
    entry: {
        main:'./main.js'
    },
    mode: "development",
    optimization: {
        minimize: false
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader:"babel-loader",
                    options: {
                        presets:["@babel/preset-env"],
                        plugins:[
                            [
                                //配置react jsx语法 | 支持库：@babel/plugin-transform-react-jsx
                                "@babel/plugin-transform-react-jsx",
                                //自定义 createElement 调用对象名称，默认为React.createElement
                                {pragma:"ToyReact.createElement"}
                            ]
                        ]
                    }
                }
            }
        ]
    }
}