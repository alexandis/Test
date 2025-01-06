import { inject, NgModule } from '@angular/core';
import { PageModule } from '@abp/ng.components/page';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DOCUMENT } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, PageModule],
})
export class HomeModule {
  
  protected readonly window = inject(DOCUMENT).defaultView;

  constructor() {
    this.window.addEventListener('storage', event => {
      if (event.key === 'access_token' && event.newValue === null) {
        this.window.location.reload();
      }
    });
  }
}
