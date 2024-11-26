import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-certification',
  standalone: true,
  imports: [],
  templateUrl: './skills-certification.component.html',
  styleUrl: './skills-certification.component.css'
})
export class SkillsCertificationComponent {
  certification1 = {
    title: 'Web Development Certification',
    issuer: 'FreeCodeCamp',
    dateIssued: 'January 2023'
  };

  certification2 = {
    title: 'JavaScript Essentials',
    issuer: 'Udemy',
    dateIssued: 'March 2022'
  };

  certification3 = {
    title: 'Responsive Web Design',
    issuer: 'Coursera',
    dateIssued: 'June 2021'
  };
}