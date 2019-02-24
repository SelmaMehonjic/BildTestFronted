import { Component, OnInit, Inject } from '@angular/core';
import { DeviceTypeModel } from 'src/app/models/deviceType.model';
import { PropertyModelModel } from 'src/app/models/property.model';
import { DeviceModel } from 'src/app/models/device.model';
import { DeviceTypeService } from 'src/app/services/device-type.service';
import { DeviceService } from '../../services/device.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-device-pop-up-form',
    templateUrl: './device-pop-up-form.html',
    styleUrls: ['./device-pop-up-form.css']
  })
  export class DeviceFormComponent implements OnInit {
    types: DeviceTypeModel[];
    properties: PropertyModelModel[];
    device = new DeviceModel();

    constructor(
      private typeservice: DeviceTypeService,
      private deviceservice: DeviceService,
      public dialogRef: MatDialogRef<DeviceFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { dialogRef.disableClose = true; }

    ngOnInit() {
      if (this.data) {
        this.getDevice(this.data);
      }
      this.getTypes();
    }

    private getDevice(id) {
      this.deviceservice.getDeviceProperties(id).subscribe((response: any) => {
        this.device = response;
      });
    }

    getTypes() {
      this.typeservice.getDeviceTypes().subscribe((response: any) => {
        this.types = response;
      });
    }

    onTypeChanged(event) {
      this.device.propertyValues = [];
    }

    getChoosedType(typeId) {
      this.typeservice.getProperties(typeId).subscribe((response: any) => {
        this.properties = response;
        for (const prop of this.properties) {
          this.device.propertyValues.push({
            DeviceTypePropertyId: prop.id,
            DeviceTypeProperty: null,
            name: prop.name,
            id: null,
            value: null,
            DeviceId: null
          });
        }
      });
    }

    onSubmit() {
      this.deviceservice.createDevice(this.device).subscribe((response: any) => {
        let send = new DeviceModel();
        send = response;
        this.typeservice.getDeviceType(response.deviceTypeId).subscribe((response: any) => {
          send.deviceType = response;
          });
        this.dialogRef.close(send);
      });
    }

    onCancel() {
      this.dialogRef.close();
    }
  }
