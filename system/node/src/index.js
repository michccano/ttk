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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.getRequestParams = void 0;
var axios_cookiejar_support_1 = require("axios-cookiejar-support");
var axios_1 = require("axios");
var JSONBig = require("json-bigint");
var qs = require("qs");
var tough_cookie_1 = require("tough-cookie");
var cryptography_1 = require("./cryptography");
var feed_1 = require("./feed");
var live_stream_1 = require("./live-stream");
var params_1 = require("./params");
var TikTokAPI = /** @class */ (function () {
    /**
     * Creates a new API instance.
     *
     * @param {StaticRequestParams} reqParams
     * @param {TikTokAPIConfig} apiConfig
     * @param {AxiosRequestConfig} requestConfig
     */
    function TikTokAPI(reqParams, apiConfig, requestConfig) {
        var _this = this;
        /**
         * Logs in using an email and password.
         *
         * @param {string} email
         * @param {string} password
         * @returns {AxiosPromise<LoginResponse>}
         */
        this.loginWithEmail = function (email, password) { return _this.login({
            email: cryptography_1.encryptWithXOR(email),
            password: cryptography_1.encryptWithXOR(password)
        }); };
        /**
         * Logs in using a username and password.
         *
         * @param {string} username
         * @param {string} password
         * @returns {AxiosPromise<LoginResponse>}
         */
        this.loginWithUsername = function (username, password) { return _this.login({
            username: cryptography_1.encryptWithXOR(username),
            password: cryptography_1.encryptWithXOR(password)
        }); };
        /**
         * Logs in to the app.
         *
         * @param {LoginRequest} params
         * @returns {AxiosPromise<LoginResponse>}
         */
        this.login = function (params) {
            return _this.request.post('passport/user/login/', null, {
                params: __assign({ mix_mode: 1, username: '', email: '', mobile: '', account: '', password: '', captcha: '' }, params)
            })
                .then(function (res) {
                if (res.headers['x-tt-token']) {
                    _this.request.defaults.headers.common['x-tt-token'] = res.headers['x-tt-token'];
                }
                return res;
            });
        };
        /**
         * Gets a user's profile.
         *
         * @param {string} userId
         * @returns {AxiosPromise<UserProfileResponse>}
         */
        this.getUser = function (userId) {
            return _this.request.get('aweme/v1/user/', { params: { user_id: userId } });
        };
        /**
         * Searches for users.
         *
         * @param params
         * @returns {AxiosPromise<UserSearchResponse | BaseResponseData>}
         */
        this.searchUsers = function (params) {
            return _this.request.get('aweme/v1/discover/search/', {
                params: __assign({ type: 1 }, params_1.withDefaultListParams(params))
            });
        };
        /**
         * Gets the QR code image for a user.
         *
         * @param userId
         * @param schemaType
         * @returns {AxiosPromise<QRCodeResponse | BaseResponseData>}
         */
        this.getQRCode = function (userId, schemaType) {
            if (schemaType === void 0) { schemaType = 4; }
            return _this.request.post('aweme/v1/fancy/qrcode/info/', qs.stringify({
                schema_type: schemaType,
                object_id: userId
            }), {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                params: {
                    js_sdk_version: '',
                    app_type: 'normal'
                }
            });
        };
        /**
         * Gets a post.
         *
         * @param {string} postId
         * @returns {AxiosPromise<GetPostResponse>}
         */
        this.getPost = function (postId) {
            return _this.request.get('aweme/v1/aweme/detail/', {
                params: {
                    aweme_id: postId
                }
            });
        };
        /**
         * Lists a user's posts.
         *
         * @param {ListPostsRequest} params
         * @returns {AxiosPromise<ListPostsResponse | BaseResponseData>}
         */
        this.listPosts = function (params) {
            return _this.request.get('aweme/v1/aweme/post/', {
                params: params_1.withDefaultListParams(params)
            });
        };
        /**
         * Lists a user's followers.
         *
         * @param {ListFollowersRequest} params
         * @returns {AxiosPromise<ListFollowersResponse | BaseResponseData>}
         */
        this.listFollowers = function (params) {
            return _this.request.get('aweme/v1/user/follower/list/', {
                params: params_1.withDefaultListParams(params)
            });
        };
        /**
         * Lists the users a user is following.
         *
         * @param {ListFollowingRequest} params
         * @returns {AxiosPromise<ListFollowingResponse | BaseResponseData>}
         */
        this.listFollowing = function (params) {
            return _this.request.get('aweme/v1/user/following/list/', {
                params: params_1.withDefaultListParams(params)
            });
        };
        /**
         * Follows a user.
         *
         * @param userId
         * @returns {AxiosPromise<FollowResponse | BaseResponseData>}
         */
        this.follow = function (userId) {
            return _this.request.get('aweme/v1/commit/follow/user/', {
                params: {
                    user_id: userId,
                    type: 1
                }
            });
        };
        /**
         * Unfollows a user.
         *
         * @param userId
         * @returns {AxiosPromise<FollowResponse | BaseResponseData>}
         */
        this.unfollow = function (userId) {
            return _this.request.get('aweme/v1/commit/follow/user/', {
                params: {
                    user_id: userId,
                    type: 0
                }
            });
        };
        /**
         * Lists the users who have requested to follow the logged in user.
         *
         * @param {ListReceivedFollowRequestsRequest} params
         * @returns {AxiosPromise<ListReceivedFollowRequestsResponse | BaseResponseData>}
         */
        this.listReceivedFollowRequests = function (params) {
            return _this.request.get('aweme/v1/user/following/request/list/', { params: params_1.withDefaultListParams(params) });
        };
        /**
         * Approves a request from a user to follow you.
         *
         * @param userId
         * @returns {AxiosPromise<ApproveFollowResponse | BaseResponseData>}
         */
        this.approveFollowRequest = function (userId) {
            return _this.request.get('aweme/v1/commit/follow/request/approve/', {
                params: {
                    from_user_id: userId
                }
            });
        };
        /**
         * Rejects a request from a user to follow you.
         *
         * @param userId
         * @returns {AxiosPromise<RejectFollowResponse | BaseResponseData>}
         */
        this.rejectFollowRequest = function (userId) {
            return _this.request.get('aweme/v1/commit/follow/request/reject/', {
                params: {
                    from_user_id: userId
                }
            });
        };
        /**
         * Likes a post.
         *
         * @param postId
         * @returns {AxiosPromise<LikePostResponse | BaseResponseData>}
         */
        this.likePost = function (postId) {
            return _this.request.get('aweme/v1/commit/item/digg/', {
                params: {
                    aweme_id: postId,
                    type: 1
                }
            });
        };
        /**
         * Unlikes a post.
         *
         * @param postId
         * @returns {AxiosPromise<LikePostResponse | BaseResponseData>}
         */
        this.unlikePost = function (postId) {
            return _this.request.get('aweme/v1/commit/item/digg/', {
                params: {
                    aweme_id: postId,
                    type: 0
                }
            });
        };
        /**
         * Lists comments for a post.
         *
         * @param params
         */
        this.listComments = function (params) {
            return _this.request.get('aweme/v1/comment/list/', {
                params: params_1.withDefaultListParams(__assign({ comment_style: 2, digged_cid: '', insert_cids: '' }, params))
            });
        };
        /**
         * Posts a comment on a post.
         *
         * @param postId
         * @param text
         * @param tags
         */
        this.postComment = function (postId, text, tags) {
            if (tags === void 0) { tags = []; }
            return _this.request.post('aweme/v1/comment/publish/', qs.stringify({
                text: text,
                aweme_id: postId,
                text_extra: tags,
                is_self_see: 0
            }), {
                headers: {
                    'content-type': 'application.x-www-form-urlencoded'
                }
            });
        };
        /**
         * Lists popular categories/hashtags.
         *
         * @param params
         */
        this.listCategories = function (params) {
            if (params === void 0) { params = { count: 10, cursor: 0 }; }
            return _this.request.get('aweme/v1/category/list/', {
                params: params_1.withDefaultListParams(params)
            });
        };
        /**
         * Searches for hashtags.
         *
         * @param params
         * @returns {AxiosPromise<HashtagSearchResponse | BaseResponseData>}
         */
        this.searchHashtags = function (params) {
            return _this.request.get('aweme/v1/challenge/search/', {
                params: params_1.withDefaultListParams(params)
            });
        };
        /**
         *
         * @param params
         * @returns {AxiosPromise<ListPostsInHashtagRequest | BaseResponseData>}
         */
        this.listPostsInHashtag = function (params) {
            return _this.request.get('aweme/v1/challenge/aweme/', {
                params: params_1.withDefaultListParams(__assign({ query_type: 0, type: 5 }, params))
            });
        };
        /**
         * Lists posts in the For You feed.
         *
         * max_cursor should always be 0.
         *
         * @param params
         */
        this.listForYouFeed = function (params) {
            return _this.request.get('aweme/v1/feed/', {
                params: params_1.withDefaultListParams(__assign({ count: 6, is_cold_start: 1, max_cursor: 0, pull_type: feed_1.PullType.LoadMore, type: feed_1.FeedType.ForYou }, params))
            });
        };
        /**
         * Lists posts in the Following feed.
         *
         * max_cursor should always be 0.
         *
         * @param params
         */
        this.listFollowingFeed = function (params) {
            return _this.request.get('aweme/v1/feed/', {
                params: params_1.withDefaultListParams(__assign({ count: 6, is_cold_start: 1, max_cursor: 0, pull_type: feed_1.PullType.LoadMore, type: feed_1.FeedType.Following }, params))
            });
        };
        /**
         * Gets information about a sticker/effect.
         *
         * @param stickerId
         */
        this.getSticker = function (stickerId) { return _this.getStickers([stickerId]); };
        /**
         * Gets information about many stickers/effects.
         *
         * @param stickerIds
         */
        this.getStickers = function (stickerIds) {
            return _this.request.get('aweme/v1/sticker/detail/', {
                params: {
                    sticker_ids: stickerIds.join(',')
                }
            });
        };
        /**
         * Lists posts that use a sticker/effect.
         *
         * @param params
         */
        this.listPostsBySticker = function (params) {
            return _this.request.get('aweme/v1/sticker/aweme/', {
                params: params_1.withDefaultListParams(params)
            });
        };
        /**
         * Joins a live stream.
         *
         * @param id
         */
        this.joinLiveStream = function (id) {
            return _this.request.get('aweme/v1/room/enter/', {
                params: {
                    room_id: id
                }
            });
        };
        /**
         * Leaves a live stream.
         *
         * @param id
         */
        this.leaveLiveStream = function (id) {
            return _this.request.get('aweme/v1/room/leave/', {
                params: {
                    room_id: id
                }
            });
        };
        /**
         * Determines if you are allowed to start a live stream.  Typically you need 1,000 followers.
         */
        this.canStartLiveStream = function () {
            return _this.request.get('aweme/v1/live/podcast/');
        };
        /**
         * Creates a live stream room and sets the status to started.
         *
         * @param title
         * @param contactsAuthorized
         */
        this.startLiveStream = function (title, contactsAuthorized) {
            if (contactsAuthorized === void 0) { contactsAuthorized = 0; }
            return _this.createLiveStreamRoom(title, contactsAuthorized)
                .then(function (createRoomRes) {
                if (createRoomRes.data.status_code !== 0) {
                    throw new Error("The live stream room could not be created: " + JSON.stringify(createRoomRes.data));
                }
                var room = createRoomRes.data.room;
                return _this.updateLiveStreamStatus({
                    room_id: room.room_id,
                    stream_id: room.stream_id,
                    status: live_stream_1.LiveStreamStatus.Started,
                    reason_no: live_stream_1.LiveStreamStatusChangedReason.InitiatedByApp
                }).then(function (updateStatusRes) {
                    if (updateStatusRes.data.status_code !== 0) {
                        throw new Error("The live stream could not be started: " + JSON.stringify(updateStatusRes.data));
                    }
                    return createRoomRes;
                });
            });
        };
        /**
         * Ends a live stream.
         *
         * @param roomId
         * @param streamId
         */
        this.endLiveStream = function (roomId, streamId) {
            return _this.updateLiveStreamStatus({
                room_id: roomId,
                stream_id: streamId,
                status: live_stream_1.LiveStreamStatus.Ended,
                reason_no: live_stream_1.LiveStreamStatusChangedReason.InitiatedByUser
            });
        };
        /**
         * Creates a room to host a live stream.
         *
         * @param title
         * @param contactsAuthorized
         */
        this.createLiveStreamRoom = function (title, contactsAuthorized) {
            if (contactsAuthorized === void 0) { contactsAuthorized = 0; }
            return _this.request.post('aweme/v1/room/create/', {
                params: {
                    title: title,
                    contacts_authorized: contactsAuthorized
                }
            });
        };
        /**
         * Updates the status of a live stream.
         *
         * @param params
         */
        this.updateLiveStreamStatus = function (params) {
            return _this.request.get('aweme/v1/room/update/status/', {
                params: __assign({ status: live_stream_1.LiveStreamStatus.Ended, reason_no: live_stream_1.LiveStreamStatusChangedReason.InitiatedByUser }, params)
            });
        };
        /**
         * Transform using JSONBig to store big numbers accurately (e.g. user IDs) as strings.
         *
         * @param {any} data
         * @returns {any}
         */
        this.transformResponse = function (data) {
            if (!data || !data.length) {
                return data;
            }
            return JSONBig({ storeAsString: true }).parse(data);
        };
        /**
         * Adds timestamps and calls out to an external method to sign the URL.
         *
         * @param {AxiosRequestConfig} config
         * @returns {Promise<AxiosRequestConfig>}
         */
        this.signRequest = function (config) { return __awaiter(_this, void 0, void 0, function () {
            var ts, params, url, signedURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof config.paramsSerializer !== 'function') {
                            throw new Error('Missing required paramsSerializer function');
                        }
                        ts = Math.floor((new Date()).getTime() / 1000);
                        params = __assign(__assign({}, config.params), { ts: ts, _rticket: new Date().getTime() });
                        url = "" + config.baseURL + config.url + "?" + config.paramsSerializer(params);
                        return [4 /*yield*/, this.config.signURL(url, ts, this.request.defaults.params.device_id)];
                    case 1:
                        signedURL = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, config), { url: signedURL, params: {} })];
                }
            });
        }); };
        if (typeof apiConfig.signURL !== 'function') {
            throw new Error('You must supply a signURL function to the TikTokAPI config');
        }
        this.config = __assign({ baseURL: 'https://api2.musical.ly/', host: 'api2.musical.ly', userAgent: "com.zhiliaoapp.musically/" + reqParams.manifest_version_code
                + (" (Linux; U; Android " + reqParams.os_version + "; " + reqParams.language + "_" + reqParams.region + ";")
                + (" " + reqParams.device_type + "; Build/NHG47Q; Cronet/58.0.2991.0)") }, apiConfig);
        this.cookieJar = new tough_cookie_1.CookieJar();
        this.request = axios_1["default"].create(__assign({ paramsSerializer: params_1.paramsSerializer(params_1.paramsOrder), baseURL: this.config.baseURL, headers: {
                host: this.config.host,
                connection: 'keep-alive',
                'accept-encoding': 'gzip',
                'user-agent': this.config.userAgent,
                'sdk-version': 1,
                'x-ss-tc': 0
            }, jar: this.cookieJar, params: reqParams, transformResponse: this.transformResponse, withCredentials: true }, requestConfig));
        axios_cookiejar_support_1["default"](this.request);
        this.request.interceptors.request.use(this.signRequest);
    }
    return TikTokAPI;
}());
exports["default"] = TikTokAPI;
/**
 * Merges required user-defined parameters with default parameters.
 *
 * @param {RequiredUserDefinedRequestParams} requestParams
 * @returns {StaticRequestParams}
 */
exports.getRequestParams = function (requestParams) { return (__assign({ os_api: '23', device_type: 'Pixel', ssmix: 'a', manifest_version_code: '2018111632', dpi: 420, app_name: 'musical_ly', version_name: '9.1.0', timezone_offset: 36000, is_my_cn: 0, ac: 'wifi', update_version_code: '2018111632', channel: 'googleplay', device_platform: 'android', build_number: '9.1.0', version_code: 910, timezone_name: 'Australia/Brisbane', resolution: '1080*1920', os_version: '7.1.2', device_brand: 'Google', mcc_mnc: '', app_language: 'en', language: 'en', region: 'US', sys_region: 'US', carrier_region: 'AU', carrier_region_v2: '505', aid: '1233', 'pass-region': 1, 'pass-route': 1 }, requestParams)); };
__exportStar(require("./types"), exports);
