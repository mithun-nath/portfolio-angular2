import {Component} from 'angular2/core';
import {SkillsService} from '../services/skills.service';
@Component({
    selector: 'my-footer', providers: [SkillsService], 
    templateUrl:'app/templates/footer.html',
    styleUrls:['app/templates/style.css'] 
})

export class Footer{
footerText;
    constructor(footer : SkillsService){
        this.footerText = footer.getFooter().footerText;
    }
}