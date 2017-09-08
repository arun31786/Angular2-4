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
var item_component_1 = require("./item.component");
var DropDownComponent = (function () {
    function DropDownComponent() {
        this.open = false;
        this.className = "dropdown";
        console.log(this.countryList);
    }
    DropDownComponent.prototype.changeDropdownClassName = function () {
        if (this.open) {
            this.open = false;
            this.className = "dropdown";
        }
        else {
            this.open = true;
            this.className = "dropdown open";
        }
    };
    __decorate([
        core_1.Input('countries'), 
        __metadata('design:type', Object)
    ], DropDownComponent.prototype, "countryList", void 0);
    DropDownComponent = __decorate([
        core_1.Component({
            selector: "my-dd",
            template: "\n        <div class={{className}}>\n        <button (click)=\"changeDropdownClassName()\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Dropdown\n            <span class=\"caret\"></span>\n        </button>\n        <my-item [countries]=\"countryList\"></my-item>\n        \n    </div>\n\n    ",
            directives: [item_component_1.ItemComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DropDownComponent);
    return DropDownComponent;
}());
exports.DropDownComponent = DropDownComponent;
//# sourceMappingURL=dropdown.component.js.map