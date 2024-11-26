import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  universityName: string = 'Holy Angel University';
  universityLocation: string = 'Angeles, City Pampanga';
  graduationDate: string = 'June 2026';
}