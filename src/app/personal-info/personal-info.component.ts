import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {

  profileImageUrl = 'src/images/profile.jpeg';

  fullName: string = 'Jessica Hanschke';
  address: string = 'Savannah Green Plains Subdivision, Angeles City, Pampanga';
  phoneNumber: string = '0917 657 4170';
  email: string = 'jessicashanschke@gmail.com';
  objective: string = 
    'A motivated and results-driven Bachelor of Science in Information Technology student, majoring in Web Development, ' +
    'seeking to apply my skills in front-end and Graphic Designs. Passionate about creating user-centric, efficient, and ' +
    'responsive web applications. Eager to contribute my knowledge of programming languages, web frameworks, and problem-solving ' +
    'abilities to a dynamic team.';
}