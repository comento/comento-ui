const path = require("path");

module.exports = ({config}) => {
    // use vue-svg-loader
    config.module.rules = config.module.rules.map(rule => {
        if (String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)) {
            return {
                ...rule,
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
            };
        }
        return rule;
    });
    config.module.rules.push({
            test: /\.svg$/,
        oneOf: [
            {
                resourceQuery: /inline/,
                use: 'vue-svg-loader',
            },
            {
                use: {
                    loader: "file-loader",
                    options: { esModule: false },
                },
            },
            ]
        });
    // allow SCSS
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "assets/style/base/main.scss";`
            }
        }],
        include: path.resolve(__dirname, '../'),
    });
    // setup URL Alias
    config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../")
    };
    return config;
};
