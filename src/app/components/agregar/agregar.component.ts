import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { VehiculoService,  } from '../../services/vihiculo.service';
import { Vehiculo} from '../../models/listavehiculo.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //bodega: Vehiculo={
  vehiculo: any ={
    //id:         '',
    marca:     '',
    placa:  '',
    anio:  '',
    color:  '',
  }

  constructor(private VehiculoService:VehiculoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    
    this.VehiculoService.addVehiculo(this.vehiculo).subscribe()
    this.router.navigate(['/inicio'])
  }
}

