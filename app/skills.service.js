System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SkillsService;
    return {
        setters:[],
        execute: function() {
            SkillsService = (function () {
                function SkillsService() {
                }
                SkillsService.prototype.getSkills = function () {
                    return ["HTML", "CSS", "Javascript", "Angular", "Typesript"];
                };
                SkillsService.prototype.getCertifications = function () {
                    return ["Hadoop", "Map Reduce", "SEO"];
                };
                return SkillsService;
            }());
            exports_1("SkillsService", SkillsService);
        }
    }
});
//# sourceMappingURL=skills.service.js.map