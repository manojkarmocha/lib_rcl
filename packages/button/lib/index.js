"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var css = {
    padding: '5px 9px',
    border: '0',
    borderRadius: '3px',
    fontSize: 16,
    cursor: 'pointer',
    color: '#fafafa',
    outline: 'none',
};
function Button(props) {
    return (jsx_runtime_1.jsx("button", __assign({ style: __assign({ backgroundColor: props.disable ? '#cdcdcd' : '#2196F3' }, css), onClick: function (e) { return props.onClick(e); } }, { children: props.text }), void 0));
}
exports.default = Button;
//# sourceMappingURL=index.js.map