import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from "./education/education.component";
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { TrainingComponent } from './training/training.component';
import { SkillsCertificationComponent } from './training/skills-certification/skills-certification.component';
import { ReferencesComponent } from './references/references.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalInfoComponent, EducationComponent, WorkexperienceComponent, TrainingComponent, SkillsCertificationComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'prelim_lab_1';
}
