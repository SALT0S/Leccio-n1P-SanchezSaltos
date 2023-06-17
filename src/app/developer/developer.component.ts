import { Component } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  contactInfo = {
    photo: '../../../../assets/BD198116-0909-47B8-B8FF-97C464F6993A_1_105_c.jpeg',
    firstName: 'Jose',
    lastName: 'Sanchez',
    email: 'jose.sanchezsalt@ug.edu.ec'
  };
}
