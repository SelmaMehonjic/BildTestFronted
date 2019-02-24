import { Component, OnInit, Inject } from '@angular/core';
import { DeviceModel } from 'src/app/models/device.model';
import { DeviceTypeService } from 'src/app/services/device-type.service';
import { DeviceService } from '../../services/device.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-device-pop-up-detail',
    templateUrl: './device-pop-up-detail.html',
    styleUrls: ['./device-pop-up-detail.css']
  })

  export class DeviceDetailComponent implements OnInit {
    device = new DeviceModel();
    constructor(
      private typeservice: DeviceTypeService,
      private deviceservice: DeviceService,
      public dialoginfo: MatDialogRef<DeviceDetailComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DeviceModel[]
    ) {}

    ngOnInit() {
      this.getDevice(this.data);
    }

    private getDevice(id) {
      this.deviceservice.getDeviceProperties(id).subscribe((response: any) => {
        this.device = response;
        console.log(this.device);
      });
    }

  }

