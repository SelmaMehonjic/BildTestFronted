import { PropertyModelModel } from './property.model';

export class DeviceTypeModel {
  id: number;
  name: string;
  parentType: DeviceTypeModel;
  parentTypeName: string;
  parentTypeId: number;
  typeProperties: PropertyModelModel[];
  childrenType: DeviceTypeModel;

  constructor(deviceType?) {
    this.id = deviceType ? deviceType.id : null;
    this.name = deviceType ? deviceType.name : '';
    this.parentType = deviceType ? deviceType.parentType : null;
    this.typeProperties = deviceType ? deviceType.typeProperties : [];
    this.childrenType = deviceType ? deviceType.childrenType : null;
    this.parentTypeId = deviceType ? deviceType.parentTypeId : null;
    this.parentTypeName = deviceType ? deviceType.parentTypeName : '';
  }

}
