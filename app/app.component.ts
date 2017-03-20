import {Component} from 'angular2/core';
import {MySkills} from './skills.component'
import {MyCertification} from './certifications.component'
import {MyProfile} from './profile.component'

@Component ({
    selector: 'my-app',
    template: `
    <my-profile></my-profile>
    <my-skills></my-skills>
    <my-certification></my-certification>
    `,
    directives: [MySkills,MyCertification,MyProfile]
})
export class AppComponent {

 }