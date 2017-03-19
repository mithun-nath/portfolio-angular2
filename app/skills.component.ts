import {Component} from 'angular2/core'

@Component ({
    selector : 'my-skills',
    template : `
    <h2> My Skills </h2>
     <ul>
        <li *ngFor="#skill of skills"> 
        {{ skill }} 
        </li>
    </ul>
    `  
})
export class MySkills {
skills = ["HTML","CSS","Javascript","Angular","Typesript"];    
 }