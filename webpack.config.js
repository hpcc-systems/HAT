const path = require("path");
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const TerserPlugin = require("terser-webpack-plugin");
const glob = require("glob");

module.exports = {
  // entry: {
  //   "bundle.js": glob
  //     .sync("build/static/?(js|css)/main.*.?(js|css)")
  //     .map((f) => path.resolve(__dirname, f)),
  // },
  entry: "./src/components/Main.js",
  output: {
    filename: "build/static/js/bundle.min.js",
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.html$/, exclude: /tmp/, loader: "ng-cache-loader" },
      { test: /\.js$/, exclude: /(node_modules|tmp)/, use: {loader: "babel-loader", options:{plugins:['@babel/plugin-proposal-class-properties','@babel/plugin-transform-react-jsx']}}},
      { test: /\.(png|jpg|woff|woff2|eot|ttf|otf)/, loader: "url-loader" },
      { test: /\.svg/, loader: "file?name=/img/[hash].[ext]?" },
      { test: /\.less/, loader: "style-loader!css-loader!less-loader" },
    ],
  },
};
