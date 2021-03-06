import { AfterViewInit, Component, OnInit ,ViewChildren  } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';
import { Curso } from '../../_model/curso';
import { CursoService } from '../../_service/curso.service';

@Component({
  selector: 'app-configurar.curso',
  templateUrl: './configurar.curso.component.html',
  styleUrls: ['./configurar.curso.component.css']
})
export class ConfigurarCursoComponent implements OnInit {
   
  dtOptions: any = {};
  curso:Curso[];
  titulo: string;
  dataUpdate: any;
  rowsDataUpdate:any;
  @ViewChildren (DataTableDirective)
  private dtElement: DataTableDirective; 

  constructor(private router: Router,private cursoService: CursoService) { }

  ngOnInit() {

    this.titulo ="CURSOS"
    this.poblarIniTable();
  }

  poblarIniTable(){
    
    this.dtOptions = {
      ajax: {
        type: 'GET',
        url: 'http://localhost:8080/roles'
      },
      columns: [ {
        title: 'Id',
        data: 'idRol'
      }, {
        title: 'Nombre',
        data: 'nombre'
      }, {
        title: 'Descripcion',
        data: 'descripcion'
      }],
     /*  rowCallback: (row: Node, data: any[] | Object, index: number) => {

        $('td', row).unbind('dblclick');
        $('td', row).bind('dblclick', () => {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              this.updateClick(data);
          });
        });
        return row;
      }, */
      pagingType: 'full_numbers',
			searching: true,
			lengthChange: false,
      pageLength: 10,
      language: {
                  "info": "",
                  "search": "Buscador Usuario",
                  "zeroRecords": "No hay registro para mostrar"
      },
      select: 'single'

  }
}
add(){
  this.router.navigate(['/proveedores/form/']);
}
updateClick(data:any){
  console.log(data);
  this.router.navigate(['/proveedores/form/',data.id]);  
}
update(){
  
 /*  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      if (dtInstance.row('.selected').data() === undefined) {
        console.log("error");
      } else {
        this.updateClick(dtInstance.rows('.selected').data()[0]);
      }
    }); */

}

delete(){
  
  /* this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    console.log(JSON.stringify(dtInstance.row('.selected').data()["id"]));
    if (dtInstance.row('.selected').data() === undefined) {
      console.log("Error al Eliminar");
    } else {
        Swal.fire({
          title: `Estás seguro?`,
          text: `¿Seuro que deseas eliminar al Proveedor ?`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
          if (result.value) {
            this.proveedorService.delete(dtInstance.row('.selected').data()["id"]).subscribe(
              response => {
                dtInstance.rows('.selected').remove().draw(false);
                Swal.fire(
                  'Proveedor Eliminado!',
                  `Proveddor  eliminado con éxito`,
                  'success'
                )
              }
            )
      
          }
        })
      
      
    }
  }); */
}

}
