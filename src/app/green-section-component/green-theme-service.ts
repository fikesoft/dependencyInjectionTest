import { Injectable } from '@angular/core';
import { ThemeColor, ThemeService } from '../theme-service';

@Injectable()
export class GreenThemeService extends ThemeService {
  override getColor(): ThemeColor {
    return ThemeColor.Green;
  }
}
