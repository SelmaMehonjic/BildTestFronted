import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceTypeListComponent } from './device-type/Device-type-list/Device-type-list.component';

const routes: Routes = [
  { path: '', component: DeviceListComponent },
  { path: 'devicelist', component: DeviceListComponent },
  { path: 'typelist', component: DeviceTypeListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
