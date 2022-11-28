import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Marca } from '../Interfaces/Marcas';
import { MarcaSService } from './marca-s.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['nombre'];
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<Marca>;


  constructor(public dialog: MatDialog, private _marcaService: MarcaSService,
    private _snackBar: MatSnackBar) {
      this.dataSource  = new MatTableDataSource();
     }

ngOnInit(): void {
    this.obtenerMarca();
  }
ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}
obtenerMarca() {

  this._marcaService.getMarcas().subscribe(data => {   
     this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
  
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

AgregarMarca(id?: number) {
  const dialogRef = this.dialog.open(InicioComponent, {
    width: '550px', 
    disableClose: true,
    data: { id: id }  
  }); 

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      this.obtenerMarca();
    }
  });
 }


deleteMarca(id: number) {
  this.loading = true;

  setTimeout(() => {
    this._marcaService.deleteMarca(id).subscribe(() => {
      this.obtenerMarca();
      this.mensajeExito();
    })
  }, 1000);
}

mensajeExito() {
  this._snackBar.open('La marca fue eliminada con exito', '', {
    duration: 2000
  });
}



}
