

export class SkillsService{

    getSkills(){
        return {
            myskills: '\{My Skills\}',
            skills: ["HTML5","CSS3","javascript","mongodb","angularjs","nodejs","php","mysql","bootstrap","git","wordpress","sass"],
        } 
        
        
    }

     getCertifications(){
          return {
            certification: 'My Certifications',
            certificates: ["Hadoop", "Map Reduce", "SEO"]
        } 
    }

    getProfile(){
        return {
                name : '\{Mithun Nath Mayooranadhan\}',
                position: '\{Front End Developer\}',
                socials: ["fa-github", "fa-linkedin", "fa-codepen"],
                };
    }

    getFooter(){

        return {
            footerText: '\{Designed and Developed by Mithun Nath Mayooranadhan\}'
        };

    }

}