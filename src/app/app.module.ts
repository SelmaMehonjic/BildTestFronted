import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceService } from './services/device.service';
import { DeviceTypeService } from './services/device-type.service';
import { DeviceTypeListComponent } from './device-type/Device-type-list/Device-type-list.component';
import { DeviceTypeInfoDialogComponent } from './device-type/device-type-info-dialog/device-type-info-dialog.component';
import { DeviceTypeFormComponent } from './device-type/device-type-pop-up-form/device-type-pop-up-form';
import { DeviceDetailComponent } from './devices/device-pop-up-detail/device-pop-up-detail';
import { DeviceFormComponent } from './devices/device-pop-up-form/device-pop-up-form';
import { DeviceSearchComponent } from './devices/device-pop-up-search/device-pop-up-search';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    DeviceListComponent,
    DeviceFormComponent,
    DeviceDetailComponent,
    DeviceSearchComponent,
    DeviceTypeListComponent,
    DeviceTypeFormComponent,
    DeviceTypeInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [DeviceService, DeviceTypeService],
  bootstrap: [AppComponent],
  entryComponents: [
    DeviceFormComponent,
    DeviceDetailComponent,
    DeviceSearchComponent,
    DeviceTypeFormComponent,
    DeviceTypeInfoDialogComponent
  ]
})
export class AppModule {}
