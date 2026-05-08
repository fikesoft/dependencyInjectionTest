import { Injectable } from '@angular/core';

export enum ThemeColor {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
}

@Injectable()
export abstract class ThemeService {
  abstract getColor(): ThemeColor;
}
