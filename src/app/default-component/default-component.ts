import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme-service';

@Component({
  selector: 'app-default-component',
  imports: [],
  templateUrl: './default-component.html',
  styleUrl: './default-component.css',
})
export class DefaultComponent {
  themeService = inject(ThemeService);

  backgroundColor = this.themeService.getColor();
}
