import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'Test.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'Test.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
