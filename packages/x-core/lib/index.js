"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIExample = exports.awesomeFn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// awesome Function
function awesomeFn() {
    return "Hello";
}
exports.awesomeFn = awesomeFn;
function UIExample(props) {
    return (jsx_runtime_1.jsxs("div", { children: ["Hello! ", props.text] }, void 0));
}
exports.UIExample = UIExample;
//# sourceMappingURL=index.js.map