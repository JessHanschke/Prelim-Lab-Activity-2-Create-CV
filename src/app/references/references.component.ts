import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  reference1 = {
    name: 'Christian Pradilla',
    title: 'Advanced Database Professor',
    company: 'Holy Angel University',
    contact: 'christianpradilla@gmail.com'
  };

  reference2 = {
    name: 'Rocel Hanschke',
    title: 'CEO',
    company: 'Rocel Hanschke Insurance Agency',
    contact: 'rshinuranceservices@yahoo.com'
  };
}