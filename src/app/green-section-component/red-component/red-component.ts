import { Component, inject } from '@angular/core';
import { RedThemeService } from './red-theme-service';
import { ThemeService } from '../../theme-service';
import { RedChildComponent } from './red-child-component/red-child-component';

@Component({
  selector: 'app-red-component',
  imports: [RedChildComponent],
  templateUrl: './red-component.html',
  styleUrl: './red-component.css',
  providers: [{ provide: ThemeService, useClass: RedThemeService }],
})
export class RedComponent {
  themeService = inject(ThemeService);

  backgroundColor = this.themeService.getColor();
}
