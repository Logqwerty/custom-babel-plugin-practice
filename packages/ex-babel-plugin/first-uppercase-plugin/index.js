import fs from "fs";
import path from "path";
import { transformSync } from "@babel/core";
import firstUppercasePlugin from "./first-uppercase-plugin";

const filepath = path.resolve(__dirname, "..", "code.js");
const code = fs.readFileSync(filepath, "utf-8");

// transformSync 함수로 파싱, 변형, 생성을 한꺼번에!
const result = transformSync(code, {
  plugins: [firstUppercasePlugin],
  configFile: false,
});

console.log(result.code);
