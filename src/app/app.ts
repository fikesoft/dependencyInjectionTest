import { Component, signal } from '@angular/core';
import { DefaultComponent } from './default-component/default-component';
import { GreenSectionComponent } from './green-section-component/green-section-component';

@Component({
  selector: 'app-root',
  imports: [DefaultComponent, GreenSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
