import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PropertyModelModel } from 'src/app/models/property.model';
import { DeviceTypeModel } from 'src/app/models/deviceType.model';
import { DeviceTypeService } from 'src/app/services/device-type.service';

@Component({
  selector: 'app-device-type-info-dialog',
  templateUrl: './device-type-info-dialog.component.html',
  styleUrls: ['./device-type-info-dialog.component.css']
})
export class DeviceTypeInfoDialogComponent implements OnInit {
  properties: PropertyModelModel[];
  type = new DeviceTypeModel();
  constructor(
    private service: DeviceTypeService,
    public dialoginfo: MatDialogRef<DeviceTypeInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.getTypeProperties();
    this.getType();
  }

  private getTypeProperties() {
    this.service.getProperties(this.data).subscribe((response: any) => (this.properties = response));
  }

  private getType() {
    this.service.getDeviceType(this.data).subscribe((response: any) => {
      this.type = response;
    });
  }

}
