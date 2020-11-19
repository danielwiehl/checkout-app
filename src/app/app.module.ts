import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformInitializer } from './platform-initializer.service';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: providePlatformInitializerFn,
      deps: [PlatformInitializer],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

export function providePlatformInitializerFn(initializer: PlatformInitializer): () => Promise<void> {
  return (): Promise<void> => initializer.init();
}
