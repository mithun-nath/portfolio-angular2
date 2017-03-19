import {Component} from 'angular2/core';
import {MySkills} from './skills.component'
import {MyCertification} from './certifications.component'

@Component ({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1> <my-skills></my-skills><my-certification></my-certification>',
    directives: [MySkills,MyCertification]
})
export class AppComponent {

 }