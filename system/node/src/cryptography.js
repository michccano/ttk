"use strict";
exports.__esModule = true;
exports.encryptWithXOR = void 0;
exports.encryptWithXOR = function (value, key) {
    if (key === void 0) { key = 5; }
    return value
        .split('')
        .map(function (c) { return (c.charCodeAt(0) ^ key).toString(16); })
        .join('');
};
