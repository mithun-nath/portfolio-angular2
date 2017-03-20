import {Component} from 'angular2/core'
import { SkillsService } from './skills.service';

@Component ({
    selector : 'my-skills',
    template : `
    <h2 class="text-center"> My Skills </h2>
     <ul>
        <li *ngFor="#skill of skills"> 
        {{ skill }} 
        </li>
    </ul>
    `,
    providers: [SkillsService]  
})
export class MySkills {
skills;

constructor(skillsService : SkillsService){
   this.skills = skillsService.getSkills();
 }

}
