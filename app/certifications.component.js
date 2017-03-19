System.register(['angular2/core', './skills.service'], function(exports_1, context_1) {
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
    var MyCertification;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skills_service_1_1) {
                skills_service_1 = skills_service_1_1;
            }],
        execute: function() {
            MyCertification = (function () {
                function MyCertification(certificationsService) {
                    this.certifications = certificationsService.getCertifications();
                }
                MyCertification = __decorate([
                    core_1.Component({
                        selector: 'my-certification',
                        template: "\n<h2>My Certifications</h2>\n<ul>\n        <li *ngFor=\"#certification of certifications\"> \n        {{ certification }} \n        </li>\n    </ul>\n",
                        providers: [skills_service_1.SkillsService]
                    }), 
                    __metadata('design:paramtypes', [skills_service_1.SkillsService])
                ], MyCertification);
                return MyCertification;
            }());
            exports_1("MyCertification", MyCertification);
        }
    }
});
//# sourceMappingURL=certifications.component.js.map