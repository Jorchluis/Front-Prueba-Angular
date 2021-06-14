import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoService } from '../../services/vihiculo.service';
import { Vehiculo} from '../../models/listavehiculo.interface';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  //styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit  {

  //listado : Vehiculo [] = []
  listado:any[]=[]

  constructor(private VehiculoService:VehiculoService, private router:Router) {   }

  ngOnInit(): void {
    this.listarVehiculos()
    }
  
  listarVehiculos(){
      this.VehiculoService.getVehiculos().subscribe((res:any) => {
        console.log(res.vehiculos);
        this.listado =res.vehiculos
      }, error =>{
        console.log(error);
      })
  }

  deleteVehiculo(id:string){
    this.VehiculoService.deleteVehiculo(id).subscribe(res=>{
      console.log('Registro eliminado')
      this.listarVehiculos()
    })
  }

  updateVehiculo(id:string){
    console.log('usted va a editar el registro')
    this.router.navigate(['/edit/'+id])
  }
 
}
