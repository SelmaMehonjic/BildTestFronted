import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeService {
  url = environment.baseApi;

constructor(private http: HttpClient) { }

createType(type) {
  return this.http.post(this.url + 'api/deviceType', type);
}

getDeviceTypes() {
  return this.http.get(this.url + 'api/deviceType');
}

getDeviceType(id) {
  return this.http.get(this.url + 'api/deviceType/' + id);
}

getProperties(id) {
  return this.http.get(this.url + 'api/deviceType/properties/' + id);
}

deleteType(id) {
  return this.http.delete(this.url + 'api/deviceType/' + id);
}
}
