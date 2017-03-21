import {Component} from 'angular2/core';
import {MySkills} from './skills/skills.component'
import {MyCertification} from './certifications/certifications.component'
import {MyProfile} from './profile/profile.component'
import {Footer} from './footer/footer.component'

@Component ({
    selector: 'my-app',
    template: `
    <my-profile></my-profile>
    <my-skills></my-skills>
    <my-certification></my-certification>
    <my-footer></my-footer>
    `,
    directives: [MySkills, MyCertification, MyProfile, Footer]
})
export class AppComponent {

 }