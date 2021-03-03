"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
main_1.main()
    .then(function (out) {
    console.log(out);
    process.exit(0);
})
    .catch(function (err) {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=cli.js.map