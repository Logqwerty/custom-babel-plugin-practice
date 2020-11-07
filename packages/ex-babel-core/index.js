const babel = require("@babel/core");
const fs = require("fs");

const compile = (input, output, presets, plugins) => {
  // 1. 컴파일할 파일을 읽어들인다.
  const src = fs.readFileSync(input, "utf-8");
  // 2. babel API를 이용해 컴파일한다. 컴파일 시 적용할 옵션들을 설정해준다.
  // 옵션의 자세한 사항은 https://babeljs.io/docs/en/options 참고.
  const { code } = babel.transformSync(src, {
    filename: input,
    configFile: false,
    presets,
    plugins,
  });
  // 3. 컴파일 결과를 출력한다.
  fs.writeFileSync(output, code, "utf-8");
  console.log(code);
};

const presets = ["@babel/preset-react"];
const plugins = ["@babel/plugin-transform-destructuring"];

const srcName = "./src/before.js";
const destName = "./dist/after.js";

compile(srcName, destName, presets, plugins);
