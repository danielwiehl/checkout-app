import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beans } from '@scion/toolkit/bean-manager';
import { MessageClient } from '@scion/microfrontend-platform';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {

  public productIds: string[] = [];

  constructor(route: ActivatedRoute) {
    this.productIds = JSON.parse(route.snapshot.paramMap.get('products'));
    console.log('[checkout-app] productIds: ', this.productIds);

    this.productIds.forEach(productId => {
      Beans.get(MessageClient).publish(`microfrontends/product/${productId}`, null, {
        headers: new Map().set('outlet', `product-checkout-${productId}`),
      });
    });
  }

  public onBuyClick(): void {
    console.log('>>> Buy the products');
  }
}
