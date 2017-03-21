

export class SkillsService{

    getSkills(){
        return {
            myskills: '\{My Technical Skills\}',
            skills: ["HTML","CSS","Javascript","Angular","Typesript"]
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
                socials: ["GitHub", "LinkedIn", "CodePen"],
                };
    }

    getFooter(){

        return {
            footerText: '\{Designed and Developed by Mithun Nath Mayooranadhan\}'
        };

    }

}