export class SearchModel {
  FilterBy: string;

  PageNumber: number;
  DeviceNumberPerPage: number;
  PropertyValue: string;

  GreatherThan: number;
  GreatherThanOrEqual: number;
  LessThan: number;
  LessThanOrEqual: number;

  AfterDate: Date;
  AfterOrEqualDate: Date;
  BeforeDate: Date;
  BeforeOrEqualDate: Date;

      constructor(search?) {
      this.FilterBy = search ? search.filterBy : '';
      this.PageNumber = search ? search.PageNumber : null;
      this.DeviceNumberPerPage = search ? search.DeviceNumberPerPage : null;
      this.PropertyValue = search ? search.PropertyValue : '';
      this.GreatherThan = search ? search.GreatherThan : null;
      this.GreatherThanOrEqual = search ? search.GreatherThanOrEqual : null;
      this.LessThan = search ? search.LessThan : null;
      this.LessThanOrEqual = search ? search.LessThanOrEqual : null;
      this.AfterDate = search ? search.AfterDate : null;
      this.AfterOrEqualDate = search ? search.AfterOrEqualDate : null;
      this.BeforeDate = search ? search.BeforeDate : null;
      this.BeforeOrEqualDate = search ? search.BeforeOrEqualDate : null;
    }
}
