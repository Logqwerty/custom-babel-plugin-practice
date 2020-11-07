module.exports = {
  entry: "./src/before.js",
  output: {
    filename: "after.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
            plugins: ["@babel/plugin-transform-destructuring"],
          },
        },
      },
    ],
  },
  optimization: { minimizer: [] },
};
