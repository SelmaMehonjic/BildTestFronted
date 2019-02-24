import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  url = environment.baseApi;
  constructor(private http: HttpClient) {}

  getDevices() {
    return this.http.get(this.url + 'api/device/list');
  }

  createDevice(device) {
    return this.http.post(this.url + 'api/device', device);
  }

  deleteDevice(id) {
    return this.http.delete(this.url + 'api/device/' + id);
  }

  getDevice(id) {
    return this.http.get(this.url + 'api/device/' + id);
  }

  getDeviceProperties(id) {
    return this.http.get(this.url + 'api/device/values/' + id);
  }

  searchDevices(params) {
    return this.http.get(this.url + 'api/device/' , {params : params} );
  }

}
