import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Vehiculo } from '../models/listavehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  url = 'http://localhost:8085/api/vehiculos'

  constructor( private http: HttpClient) {}
  
  getVehiculos(){
    return this.http.get(this.url) 
  }

  getVehiculo(id:string){
    return this.http.get(this.url+'/'+id)
  }

  addVehiculo(vehiculo:Vehiculo){
    return this.http.post(this.url, vehiculo)
  }

  deleteVehiculo(id:string){
    return this.http.delete(this.url+'/'+id)
  }

  updateVehiculo(id:string, vehiculo: Vehiculo){
    return this.http.put(this.url+'/'+id, vehiculo)
  }

}
