System.register(['angular2/core', '../services/skills.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, skills_service_1;
    var Footer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skills_service_1_1) {
                skills_service_1 = skills_service_1_1;
            }],
        execute: function() {
            Footer = (function () {
                function Footer(footer) {
                    this.footerText = footer.getFooter().footerText;
                }
                Footer = __decorate([
                    core_1.Component({
                        selector: 'my-footer', providers: [skills_service_1.SkillsService],
                        templateUrl: 'app/templates/footer.html',
                        styleUrls: ['app/templates/style.css']
                    }), 
                    __metadata('design:paramtypes', [skills_service_1.SkillsService])
                ], Footer);
                return Footer;
            }());
            exports_1("Footer", Footer);
        }
    }
});
//# sourceMappingURL=footer.component.js.map