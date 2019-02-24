import { DeviceTypeModel } from './deviceType.model';

export class PropertyModelModel {
    id: number;
    name: string;
    deviceType: DeviceTypeModel;
    deviceTypeId: number;

    constructor(property?) {
      this.id = property ? property.id : null;
      this.name = property ? property.name : '';
      this.deviceType = property ? property.deviceType : null;
      this.deviceTypeId = property ? property.deviceTypeId : null;
    }

  }
