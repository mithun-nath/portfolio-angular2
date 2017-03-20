

export class SkillsService{

    getSkills(): string[]{
        return ["HTML","CSS","Javascript","Angular","Typesript"]; 
    }

     getCertifications(){
        return ["Hadoop", "Map Reduce", "SEO"];
    }

    getProfile(){
        return {
                name : '\{Mithun Nath Mayooranadhan\}',
                position: '\{Front End Developer\}',
                socials: ["GitHub", "LinkedIn", "CodePen"],
                };
    }
}