"use strict";
exports.__esModule = true;
exports.loadTestData = exports.mockConfig = exports.mockParams = void 0;
var fs = require("fs");
var src_1 = require("../src");
exports.mockParams = src_1.getRequestParams({
    device_id: '',
    fp: '',
    iid: '',
    openudid: ''
});
exports.mockConfig = {
    signURL: function (url) { return url; }
};
exports.loadTestData = function (filename) { return fs.readFileSync("test/testdata/" + filename).toString(); };
