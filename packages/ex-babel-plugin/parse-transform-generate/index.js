import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

const code = "const greeting = 'hello, world!';";

// 1. code --> AST
const ast = parser.parse(code);

// 2. transform the AST
traverse(ast, {
  enter(path) {
    if (path.isStringLiteral()) {
      const origin = path.node.value;
      const converted = origin.charAt(0).toUpperCase();
      path.node.value =
        origin.length <= 1 ? converted : converted.concat(origin.substring(1));
    }
  },
});

// 3. transformed AST --> generate code
const result = generate(ast, code);
console.log(result.code);
