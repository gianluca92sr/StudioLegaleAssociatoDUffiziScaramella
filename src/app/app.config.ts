import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha-2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      })),
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LcdH-4rAAAAALPkrAgBQOJKTCQWxHWNpp8361RF',
      } as RecaptchaSettings,
    },
  ],
};
