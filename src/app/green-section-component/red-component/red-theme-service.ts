import { Injectable } from '@angular/core';
import { ThemeColor, ThemeService } from '../../theme-service';

@Injectable()
export class RedThemeService extends ThemeService {
  override getColor(): ThemeColor {
    return ThemeColor.Red;
  }
}
