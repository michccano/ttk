"use strict";
exports.__esModule = true;
exports.PullType = exports.FeedType = void 0;
var FeedType;
(function (FeedType) {
    FeedType[FeedType["ForYou"] = 0] = "ForYou";
    FeedType[FeedType["Following"] = 1] = "Following";
})(FeedType = exports.FeedType || (exports.FeedType = {}));
var PullType;
(function (PullType) {
    /** The feed was loaded by default, e.g. by clicking the tab or loading the app */
    PullType[PullType["Default"] = 0] = "Default";
    /** The feed was explicitly refreshed by the user, e.g. by swiping down */
    PullType[PullType["Refresh"] = 1] = "Refresh";
    /** More posts were requested by the user, e.g. by swiping up */
    PullType[PullType["LoadMore"] = 2] = "LoadMore";
})(PullType = exports.PullType || (exports.PullType = {}));
