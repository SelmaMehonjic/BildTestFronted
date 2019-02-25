import { PropertyModelModel } from 'src/app/models/property.model';
import { DeviceTypeService } from '../../services/device-type.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject, Component, OnInit } from '@angular/core';
import { DeviceTypeModel } from 'src/app/models/deviceType.model';

@Component({
    selector: 'app-device-type-pop-up-form',
    templateUrl: './device-type-pop-up-form.html',
    styleUrls: ['./device-type-pop-up-form.css']
  })
  export class DeviceTypeFormComponent implements OnInit {
    type = new DeviceTypeModel();
    types: DeviceTypeModel[];
    addPropertyActive = false;
    property = new PropertyModelModel();

    constructor(
      private service: DeviceTypeService,
      public dialogRef: MatDialogRef<DeviceTypeFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { dialogRef.disableClose = true; }

    ngOnInit() {
      if (this.data) {
        this.getType(this.data);
      }
      this.getTypes();
    }

    private getType(id) {
      this.service.getDeviceType(id).subscribe((response: any) => {
        this.type = response;
      });
    }

    private getTypes() {
      this.service.getDeviceTypes().subscribe((response: any) => {
        this.types = response;
      });
    }

    onSubmit() {
      this.service.createType(this.type).subscribe((response: any) => {
        this.dialogRef.close(response);
      });
    }

    onTypeChanged(event) {}
    onAddProperty() {
      this.addPropertyActive = true;
    }

    onAddingProperty() {
      this.type.typeProperties.push(this.property);
      this.addPropertyActive = false;
      this.property = new PropertyModelModel();
    }

    onCancel() {
      console.log(this.type)
      this.dialogRef.close();
    }

  }

