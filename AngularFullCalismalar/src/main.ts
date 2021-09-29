import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) // bir uygulamada birden fazla modül olabilir
// başlangıç modülünü yukarıda belirtiyoruz
  .catch(err => console.error(err));
