import {Component} from 'angular2/core'
import { SkillsService } from '../services/skills.service';

@Component ({
    selector : 'my-skills',
    templateUrl: 'app/templates/skills.html',
    styleUrls:['app/templates/style.css'],
    providers: [SkillsService]  
})
export class MySkills {
skills;
myskills;

constructor(skillsService : SkillsService){
   this.skills = skillsService.getSkills().skills;
   this.myskills = skillsService.getSkills().myskills;

 }

}
