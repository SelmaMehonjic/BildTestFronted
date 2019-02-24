import { DeviceTypeModel } from './deviceType.model';
import { PropertyValue } from './propertyValue.model';

export class DeviceModel {
  id: number;
  createdDate: Date;
  name: string;
  deviceType: DeviceTypeModel;
  deviceTypeId: number;
  propertyValues: PropertyValue[];
  price: number;

  constructor(device?) {
    this.id = device ? device.id : null;
    this.createdDate = device ? device.createdDate : null;
    this.name = device ? device.name : '';
    this.deviceType = device ? device.deviceType : null;
    this.propertyValues = device ? device.propertyValues : [];
    this.price = device ? device.price : null;
    this.deviceTypeId = device ? device.deviceTypeId : null;
  }

}
