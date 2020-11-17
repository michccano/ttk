"use strict";
exports.__esModule = true;
exports.LiveStreamStatusChangedReason = exports.LiveStreamStatus = void 0;
var LiveStreamStatus;
(function (LiveStreamStatus) {
    LiveStreamStatus[LiveStreamStatus["Created"] = 1] = "Created";
    LiveStreamStatus[LiveStreamStatus["Started"] = 2] = "Started";
    LiveStreamStatus[LiveStreamStatus["Ended"] = 4] = "Ended";
})(LiveStreamStatus = exports.LiveStreamStatus || (exports.LiveStreamStatus = {}));
var LiveStreamStatusChangedReason;
(function (LiveStreamStatusChangedReason) {
    LiveStreamStatusChangedReason[LiveStreamStatusChangedReason["InitiatedByApp"] = 0] = "InitiatedByApp";
    LiveStreamStatusChangedReason[LiveStreamStatusChangedReason["InitiatedByUser"] = 1] = "InitiatedByUser";
})(LiveStreamStatusChangedReason = exports.LiveStreamStatusChangedReason || (exports.LiveStreamStatusChangedReason = {}));
