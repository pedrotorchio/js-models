"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Model_1 = require("./Model");
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(id) {
        var _this = _super.call(this, id) || this;
        _this.title = '';
        _this.name = '';
        _this.main_url = '';
        _this.width = 0;
        _this.height = 0;
        _this.srcset = [];
        return _this;
    }
    Image.prototype.addSource = function (src) {
        this.srcset.push(src);
        return this;
    };
    return Image;
}(Model_1.Model));
exports.Image = Image;
