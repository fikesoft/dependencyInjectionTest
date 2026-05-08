import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BlueThemeService } from './sharedServices/blue-theme-service';
import { ThemeService } from './theme-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    //We could use inject() in the app instead of app.config.ts
    { provide: ThemeService, useClass: BlueThemeService },
  ],
};
