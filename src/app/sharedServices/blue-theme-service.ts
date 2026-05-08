import { Injectable } from '@angular/core';
import { ThemeColor, ThemeService } from '../theme-service';

@Injectable()
//If we prvide in the root that contains abstract we could remove provided in root
export class BlueThemeService extends ThemeService {
  override getColor(): ThemeColor {
    return ThemeColor.Blue;
  }
}
