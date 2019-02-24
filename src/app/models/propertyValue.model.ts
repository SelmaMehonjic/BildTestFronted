import { PropertyModelModel } from './property.model';

export class PropertyValue {
  id: number;
  name: string;
  value: number;
  DeviceId: number;
  DeviceTypeProperty: PropertyModelModel;
  DeviceTypePropertyId: number;

  constructor(value?) {
    this.id = value ? value.id : null;
    this.name = value ? value.name : '';
    this.value = value ? value.value : null;
    this.DeviceId = value ? value.DeviceId : null;
    this.DeviceTypePropertyId = value ? value.DeviceTypePropertyId : null;
    this.DeviceTypeProperty = value ? value.DeviceTypeProperty : null;
  }

}
