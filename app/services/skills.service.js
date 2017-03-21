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
                    return {
                        myskills: '\{My Skills\}',
                        skills: ["HTML5", "CSS3", "javascript", "mongodb", "angularjs", "nodejs", "php", "mysql", "bootstrap", "git", "wordpress", "sass"],
                    };
                };
                SkillsService.prototype.getCertifications = function () {
                    return {
                        certification: 'My Certifications',
                        certificates: ["Hadoop", "Map Reduce", "SEO"]
                    };
                };
                SkillsService.prototype.getProfile = function () {
                    return {
                        name: '\{Mithun Nath Mayooranadhan\}',
                        position: '\{Front End Developer\}',
                        socials: ["fa-github", "fa-linkedin", "fa-codepen"],
                    };
                };
                SkillsService.prototype.getFooter = function () {
                    return {
                        footerText: '\{Designed and Developed by Mithun Nath Mayooranadhan\}'
                    };
                };
                return SkillsService;
            }());
            exports_1("SkillsService", SkillsService);
        }
    }
});
//# sourceMappingURL=skills.service.js.map