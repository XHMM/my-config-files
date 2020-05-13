import foo from "./lib";
import * as fs from "fs";

console.log(foo, fs);

// @ts-ignore
interface IAPP {
  name: string
}
const x = 1 + "2";
