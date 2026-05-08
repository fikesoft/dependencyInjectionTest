import { Component, inject } from '@angular/core';
import { ThemeService } from '../../theme-service';

@Component({
  selector: 'app-green-component',
  imports: [],
  templateUrl: './green-component.html',
  styleUrl: './green-component.css',
})
export class GreenComponent {
  themeService = inject(ThemeService);

  backgroundColor = this.themeService.getColor();
}
