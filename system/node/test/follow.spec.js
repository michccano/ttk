"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_mock_adapter_1 = require("axios-mock-adapter");
var chai_1 = require("chai");
var mocha_1 = require("mocha");
var src_1 = require("../src");
var util_1 = require("./util");
var userId = '9999999999999999999';
mocha_1.describe('#follow()', function () {
    mocha_1.it('a successful response should match the interface', function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, mock, res, expected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new src_1["default"](util_1.mockParams, util_1.mockConfig);
                    mock = new axios_mock_adapter_1["default"](api.request);
                    mock
                        .onGet(new RegExp('aweme/v1/commit/follow/user/\?.*'))
                        .reply(200, util_1.loadTestData('follow.json'), {});
                    return [4 /*yield*/, api.follow(userId)];
                case 1:
                    res = _a.sent();
                    expected = {
                        extra: {
                            fatal_item_ids: [],
                            logid: '20180101000000000000000000000000',
                            now: 1000000000000
                        },
                        follow_status: 1,
                        status_code: 0,
                        watch_status: 0
                    };
                    chai_1.assert.deepStrictEqual(res.data, expected);
                    return [2 /*return*/];
            }
        });
    }); });
});
mocha_1.describe('#unfollow()', function () {
    mocha_1.it('a successful response should match the interface', function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, mock, res, expected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new src_1["default"](util_1.mockParams, util_1.mockConfig);
                    mock = new axios_mock_adapter_1["default"](api.request);
                    mock
                        .onGet(new RegExp('aweme/v1/commit/follow/user/\?.*'))
                        .reply(200, util_1.loadTestData('unfollow.json'), {});
                    return [4 /*yield*/, api.unfollow(userId)];
                case 1:
                    res = _a.sent();
                    expected = {
                        extra: {
                            fatal_item_ids: [],
                            logid: '20180101000000000000000000000000',
                            now: 1000000000000
                        },
                        follow_status: 0,
                        status_code: 0,
                        watch_status: 0
                    };
                    chai_1.assert.deepStrictEqual(res.data, expected);
                    return [2 /*return*/];
            }
        });
    }); });
});
mocha_1.describe('#listReceivedFollowRequests()', function () {
    mocha_1.it('a successful response should match the interface', function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, mock, res, expected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new src_1["default"](util_1.mockParams, util_1.mockConfig);
                    mock = new axios_mock_adapter_1["default"](api.request);
                    mock
                        .onGet(new RegExp('aweme/v1/user/following/request/list/\?.*'))
                        .reply(200, util_1.loadTestData('listReceivedFollowRequests.json'), {});
                    return [4 /*yield*/, api.listReceivedFollowRequests({ count: 10, max_time: 1000000000 })];
                case 1:
                    res = _a.sent();
                    expected = {
                        extra: {
                            fatal_item_ids: [],
                            logid: '20180101000000000000000000000000',
                            now: 1000000000000
                        },
                        request_users: [],
                        has_more: false,
                        max_time: 1000000000,
                        min_time: 1000000001,
                        status_code: 0,
                        total: 1
                    };
                    chai_1.assert.deepStrictEqual(res.data, expected);
                    return [2 /*return*/];
            }
        });
    }); });
});
mocha_1.describe('#approveFollowRequest()', function () {
    mocha_1.it('a successful response should match the interface', function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, mock, res, expected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new src_1["default"](util_1.mockParams, util_1.mockConfig);
                    mock = new axios_mock_adapter_1["default"](api.request);
                    mock
                        .onGet(new RegExp('aweme/v1/commit/follow/request/approve/\?.*'))
                        .reply(200, util_1.loadTestData('approveFollowRequest.json'), {});
                    return [4 /*yield*/, api.approveFollowRequest(userId)];
                case 1:
                    res = _a.sent();
                    expected = {
                        extra: {
                            fatal_item_ids: [],
                            logid: '20180101000000000000000000000000',
                            now: 1000000000000
                        },
                        approve_status: 0,
                        status_code: 0
                    };
                    chai_1.assert.deepStrictEqual(res.data, expected);
                    return [2 /*return*/];
            }
        });
    }); });
});
mocha_1.describe('#rejectFollowRequest()', function () {
    mocha_1.it('a successful response should match the interface', function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, mock, res, expected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new src_1["default"](util_1.mockParams, util_1.mockConfig);
                    mock = new axios_mock_adapter_1["default"](api.request);
                    mock
                        .onGet(new RegExp('aweme/v1/commit/follow/request/reject/\?.*'))
                        .reply(200, util_1.loadTestData('rejectFollowRequest.json'), {});
                    return [4 /*yield*/, api.rejectFollowRequest(userId)];
                case 1:
                    res = _a.sent();
                    expected = {
                        extra: {
                            fatal_item_ids: [],
                            logid: '20180101000000000000000000000000',
                            now: 1000000000000
                        },
                        reject_status: 0,
                        status_code: 0
                    };
                    chai_1.assert.deepStrictEqual(res.data, expected);
                    return [2 /*return*/];
            }
        });
    }); });
});
