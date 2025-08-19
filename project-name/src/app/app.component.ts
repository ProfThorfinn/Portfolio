import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import {BioComponent} from './bio/bio.component'
import {SkillsComponent} from './skills/skills.component'
import { ProjectsComponent } from './projects/projects.component'
import {FooterComponent} from './footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent,BioComponent,SkillsComponent,ProjectsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-name';
}
