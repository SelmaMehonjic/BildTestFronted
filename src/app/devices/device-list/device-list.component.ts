import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { DeviceService } from '../../services/device.service';
import { DeviceModel } from 'src/app/models/device.model';
import { SearchModel } from 'src/app/models/search.model';
import { DeviceDetailComponent } from '../device-pop-up-detail/device-pop-up-detail';
import { DeviceFormComponent } from '../device-pop-up-form/device-pop-up-form';
import { DeviceSearchComponent } from '../device-pop-up-search/device-pop-up-search';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  constructor(private service: DeviceService, public dialog: MatDialog) {}
  public dataSource = new MatTableDataSource<DeviceModel>();
  displayedColumns = ['CreatedDate', 'Name', 'DeviceType', 'Price', 'Details', 'Update', 'Delete' ];
  searchData: SearchModel;
  devices: DeviceModel[];
  updateOrCreateDevice: boolean;
  pageSize = 5;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getDevices();
    console.log(this.searchData);
  }

  private getDevices() {
    this.service.getDevices().subscribe((response: any) => {
      this.devices = response;
      this.dataSource.data = this.devices;
      this.dataSource.paginator = this.paginator;
    });
  }

  private searchDevices(result) {
    this.searchData = result;
    this.service.searchDevices(result).subscribe((response: any) => {
      this.devices = response;
      this.dataSource.data = this.devices;
    });
  }

  openDialog(id?: number): void {
    this.updateOrCreateDevice = id ? true : false;
    const dialogRef = this.dialog.open(DeviceFormComponent, {
      disableClose: true,
      width: '400px',
      height: '500px',
      data: id ? id : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('this is result', result);
      if (result !== undefined) {
        if (!this.updateOrCreateDevice) {
          this.devices.push(result);
          this.dataSource.data = this.devices;
        } else {
          const updatedDevice = this.devices.find(f => f.id === result.id);
          const index = this.devices.indexOf(updatedDevice);
          this.devices.splice(index, 1, result);
          this.dataSource.data = this.devices;
        }
      }
    });
  }

  openDialogInfo(id): void {
    this.dialog.open(DeviceDetailComponent, {
      width: '400px',
      height: '500px',
      data: id
    });
  }

  openSearchDialog(): void {
    const dialogRef = this.dialog.open(DeviceSearchComponent, {
      width: '400px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe((result: SearchModel) => {
    if (result !== undefined) {
      result.DeviceNumberPerPage = this.pageSize;
      this.searchDevices(result);
    }
    });
  }

  onClearSearch() {
    this.searchData = undefined;
    this.getDevices();
  }
  getNext(event: MatPaginator) {
  this.pageSize = event.pageSize;
  }

  onDelete(id) {
    const deletedDevice = this.devices.find(f => f.id === id);
    const index = this.devices.indexOf(deletedDevice);
    this.devices.splice(index, 1);
    this.service.deleteDevice(id).subscribe((response: any) => {
      this.dataSource.data = this.devices;
    });
  }

}
