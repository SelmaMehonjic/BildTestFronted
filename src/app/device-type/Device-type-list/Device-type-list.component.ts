import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceTypeService } from '../../services/device-type.service';
import { DeviceTypeModel } from 'src/app/models/deviceType.model';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { DeviceTypeInfoDialogComponent } from '../device-type-info-dialog/device-type-info-dialog.component';
import { DeviceTypeFormComponent } from '../device-type-pop-up-form/device-type-pop-up-form';

@Component({
  selector: 'app-device-type-list',
  templateUrl: './Device-type-list.component.html',
  styleUrls: ['./Device-type-list.component.css']
})
export class DeviceTypeListComponent implements OnInit {
  types: DeviceTypeModel[];
  public dataSource = new MatTableDataSource<DeviceTypeModel>();
  displayedColumns = ['Name', 'Details', 'Update', 'Delete'];
  updateOrCreate: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: DeviceTypeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getTypes();
  }

  private getTypes() {
    this.service.getDeviceTypes().subscribe((response: any) => {
      this.types = response;
      this.dataSource.data = this.types;
      this.dataSource.paginator = this.paginator;
    });
  }

  onDelete(id) {
    const deletedDevice = this.types.find(f => f.id === id);
    const index = this.types.indexOf(deletedDevice);
    this.dataSource.data.splice(index, 1);
    this.service.deleteType(id).subscribe(
      (response: any) => {
        this.dataSource.data = this.types;
      },
      error => {
        alert('you can not delete this type');
      }
    );
  }

  openDialog(id?): void {
    this.updateOrCreate = id ? true : false;
    const dialogRef = this.dialog.open(DeviceTypeFormComponent, {
      width: '400px',
      height: '500px',
      data: id ? id : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (!this.updateOrCreate) {
          this.types.push(result);
          this.dataSource.data = this.types;
        } else {
          const updatedtype = this.types.find(f => f.id === result.id);
          const index = this.types.indexOf(updatedtype);
          this.types.splice(index, 1, result);
          this.dataSource.data = this.types;
      }
      }
    });
  }

  openDialogInfo(id): void {
    this.dialog.open(DeviceTypeInfoDialogComponent, {
      width: '400px',
      height: '500px',
      data: id
    });
  }
}
