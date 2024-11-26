import { Component } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  standalone: true,
  imports: [],
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.css'
})
export class WorkexperienceComponent {
  title = 'Work-Experience';
  companyName = 'Texas Instruments';
  location = 'Clark Freeport Zone Angeles City';
  duration = 'June 2025 - September 2025';
  responsibilities = [
    'Assisted in front-end and back-end web development using HTML, CSS, JavaScript, and PHP.',
    'Collaborated with designers to ensure responsive design for web applications.',
    'Supported the development of web applications, testing and debugging code.',
    'Gained hands-on experience in the use of CMS like WordPress.'
  ];
}