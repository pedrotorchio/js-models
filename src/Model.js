"use strict";
exports.__esModule = true;
var Model = /** @class */ (function () {
    function Model(id) {
        // sort: number = 0; // item order
        // tags: Tags = new Tags(); // meta tags
        // synonyms: Tags = new Tags();
        // description: string; // meta description
        this.meta = {};
        this.meta.id = id;
    }
    Model.prototype.copyInto = function (Type) {
        var model = this;
        var copy = new Type(model.meta.id);
        for (var metaName in model.meta) {
            copy.meta[metaName] = model.meta[metaName];
        }
        return copy;
    };
    return Model;
}());
exports.Model = Model;
