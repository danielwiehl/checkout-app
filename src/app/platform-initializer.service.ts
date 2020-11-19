import { Injectable } from '@angular/core';
import { MicrofrontendPlatform } from '@scion/microfrontend-platform';

@Injectable({providedIn: 'root'})
export class PlatformInitializer {

  public init(): Promise<void> {
    if (window.parent === window) {
      return Promise.resolve(); // standalone
    }
    return MicrofrontendPlatform.connectToHost({symbolicName: 'checkout-app'});
  }
}
