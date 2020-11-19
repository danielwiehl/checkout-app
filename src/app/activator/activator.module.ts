import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Beans } from '@scion/toolkit/bean-manager';
import { mapToBody, MessageClient, OutletRouter, PRIMARY_OUTLET } from '@scion/microfrontend-platform';

@NgModule({
  imports: [
    RouterModule.forChild([]),
  ],
})
export class ActivatorModule {

  constructor() {
    Beans.get(MessageClient).observe$('checkout')
      .pipe(mapToBody())
      .subscribe(productIds => {
        Beans.get(OutletRouter).navigate(`/checkout;products=${JSON.stringify(productIds)}`, {outlet: PRIMARY_OUTLET});
      });
  }
}
