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
exports.__esModule = true;
exports.withDefaultListParams = exports.paramsSerializer = exports.paramsOrder = void 0;
var qs = require("qs");
/**
 * A map containing the order of the base query string parameters.
 *
 * @type {Map<string, number>}
 */
exports.paramsOrder = [
    'app_language',
    'language',
    'region',
    'sys_region',
    'carrier_region',
    'carrier_region_v2',
    'build_number',
    'timezone_offset',
    'timezone_name',
    'mcc_mnc',
    'is_my_cn',
    'fp',
    'account_region',
    'pass-region',
    'pass-route',
    'iid',
    'device_id',
    'ac',
    'channel',
    'aid',
    'app_name',
    'version_code',
    'version_name',
    'device_platform',
    'ssmix',
    'device_type',
    'device_brand',
    'os_api',
    'os_version',
    'openudid',
    'manifest_version_code',
    'resolution',
    'dpi',
    'update_version_code',
    '_rticket',
    'ts',
    'as',
    'cp',
    'mas',
].reduce(function (map, param, i) { return map.set(param, i); }, new Map());
/**
 * Converts a object of parameters into a query string based on the given order.
 */
exports.paramsSerializer = function (order) { return function (params) { return qs.stringify(params, {
    encode: false,
    format: 'RFC1738',
    sort: function (a, b) {
        var ai = order.get(a);
        var bi = order.get(b);
        return (typeof ai === 'undefined' ? -1 : ai) - (typeof bi === 'undefined' ? -1 : bi);
    }
}); }; };
/**
 * Merges default list parameters with an existing parameter object.
 *
 * @param {ListRequestParams} params
 * @returns {object}
 */
exports.withDefaultListParams = function (params) { return (__assign({ count: 20, retry_type: 'no_retry' }, params)); };
