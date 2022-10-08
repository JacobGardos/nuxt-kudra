// https://stackoverflow.com/a/72525030/19201485
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
};
