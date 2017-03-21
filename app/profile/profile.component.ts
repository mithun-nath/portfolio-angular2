import {Component} from 'angular2/core'
import { SkillsService } from '../services/skills.service';

@Component({
    selector:'my-profile',
    templateUrl:'app/templates/profile.html',
    styleUrls: ['app/templates/style.css'],
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