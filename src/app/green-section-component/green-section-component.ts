import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme-service';
import { GreenThemeService } from './green-theme-service';
import { GreenComponent } from './green-component/green-component';
import { RedComponent } from './red-component/red-component';

@Component({
  selector: 'app-green-section-component',
  imports: [GreenComponent, RedComponent],
  templateUrl: './green-section-component.html',
  styleUrl: './green-section-component.css',
  providers: [{ provide: ThemeService, useClass: GreenThemeService }],
})
export class GreenSectionComponent {
  themeService = inject(ThemeService);
  backgroundColor = this.themeService.getColor();
}
