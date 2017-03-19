import {Component} from 'angular2/core';
import {MySkills} from './skills.component'

@Component ({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1> <my-skills></my-skills>'
    directives: [MySkills]
})
export class AppComponent {

 }