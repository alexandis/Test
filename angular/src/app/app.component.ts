import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-gdpr-cookie-consent></abp-gdpr-cookie-consent>
    <abp-internet-status></abp-internet-status>
  `,
})
export class AppComponent {
  
  private readonly window = inject(DOCUMENT).defaultView;

  constructor() {
    this.window.addEventListener('storage', event => {
      if (event.key === 'access_token' && event.newValue === null) {
        this.window.location.reload();
      }
    });
  }
}
