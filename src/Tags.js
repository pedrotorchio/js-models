"use strict";
exports.__esModule = true;
var Tags = /** @class */ (function () {
    function Tags(data) {
        if (data === void 0) { data = []; }
        this.collection = [];
        if (typeof data === 'string') {
            data = data.split(',');
        }
        this.collection = data;
    }
    return Tags;
}());
exports.Tags = Tags;
