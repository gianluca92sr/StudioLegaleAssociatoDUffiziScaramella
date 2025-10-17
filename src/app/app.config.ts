import {ApplicationConfig, InjectionToken, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, RecaptchaSettings} from 'ng-recaptcha-2';

// export const RECAPTCHA_SITE_KEY_V2 = new InjectionToken('ReCAPTACHA_V2_SITE_KEY');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      })),
    // { provide: RECAPTCHA_SITE_KEY_V2, useValue: '6LcdH-4rAAAAALPkrAgBQOJKTCQWxHWNpp8361RF' },
    // { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LcdH-4rAAAAALPkrAgBQOJKTCQWxHWNpp8361RF' }
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LcdH-4rAAAAALPkrAgBQOJKTCQWxHWNpp8361RF',
      } as RecaptchaSettings,
    },
  ],
};
