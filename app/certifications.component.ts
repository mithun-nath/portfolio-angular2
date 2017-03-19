import {Component} from 'angular2/core';
import {SkillsService} from './skills.service';

@Component({
selector: 'my-certification',
template: 
`
<h2>My Certifications</h2>
<ul>
        <li *ngFor="#certification of certifications"> 
        {{ certification }} 
        </li>
    </ul>
`,

providers: [SkillsService]
})

export class MyCertification{
certifications : string[];
constructor(certificationsService: SkillsService){
    this.certifications = certificationsService.getCertifications();
}
}

