import {Component} from 'angular2/core';
import {SkillsService} from '../services/skills.service';

@Component({
selector: 'my-certification',
template: 
`
<h2>{{certification}}</h2>
<ul>
        <li *ngFor="#certificate of certificates"> 
        {{ certification }} 
        </li>
    </ul>
`,

providers: [SkillsService]
})


export class MyCertification{
certificates;
certification;

    constructor(certificationsService: SkillsService){
        this.certification = certificationsService.getCertifications().certification; 
        this.certificates = certificationsService.getCertifications().certificates;

}
}

