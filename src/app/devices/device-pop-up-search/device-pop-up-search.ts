import { Inject, Component } from '@angular/core';
import { SearchModel } from 'src/app/models/search.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-device-pop-up-search',
  templateUrl: './device-pop-up-search.html',
  styleUrls: ['./device-pop-up-search.css']
})
export class DeviceSearchComponent {
  search = new SearchModel();

  constructor(
    public dialogsearch: MatDialogRef<DeviceSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SearchModel
  ) {}

  onSubmit() {
    this.dialogsearch.close(this.search);
  }
}
