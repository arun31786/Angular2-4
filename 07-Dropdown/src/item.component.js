"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ItemComponent = (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngAfterViewInit = function () {
        console.log(this.countryList);
    };
    __decorate([
        core_1.Input('countries'), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "countryList", void 0);
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'my-item',
            template: "\n    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" >\n        <li *ngFor=\"let country of countryList\">\n            <a href=\"#\">{{country}}</a>\n        </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map