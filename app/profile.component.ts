import {Component} from 'angular2/core'
import { SkillsService } from './skills.service';

@Component({
    selector:'my-profile',
    template: `
    <h1>{{name}}</h1>
    <h2>{{position}}</h2>
    
            <ul> 
                 <li *ngFor="#social of socials"> 
                   {{ social }} 
                 </li>
            </ul>`,
    providers: [SkillsService]  
})

export class MyProfile{
socials;
name;
position;
    constructor(profileService : SkillsService){
        this.socials = profileService.getProfile().socials;
        this.name = profileService.getProfile().name;
        this.position = profileService.getProfile().position;
     }
}