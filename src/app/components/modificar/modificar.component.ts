import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { VehiculoService,  } from '../../services/vihiculo.service';
import { Vehiculo} from '../../models/listavehiculo.interface'; 

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  vehiculo: any ={
    id: '',
    marca:     '',
    placa:  '',
    anio:  '',
    color:  '',
  }
  constructor(private VehiculoService:VehiculoService, 
              private router:Router,
              private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log( 'id entrada: '+id_entrada);
    if (id_entrada){
      this.VehiculoService.getVehiculo(id_entrada).subscribe(res=>{
        this.vehiculo=res
      },
      err=>console.log(err))
    }
  }

  modificar(){
    this.VehiculoService.updateVehiculo(this.vehiculo.id, this.vehiculo).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
    this.router.navigate(['/inicio'])
  }

}